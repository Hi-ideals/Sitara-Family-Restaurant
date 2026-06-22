/**
 * assets/js/app.js
 * -----------------------------------------------------------------------
 * Shared logic used on every page:
 *  - Renders the header / nav and footer from content.js (SITE)
 *  - Sticky header on scroll + mobile nav drawer
 *  - Scroll-reveal animations (IntersectionObserver)
 *  - Animated counters
 * Page-specific behaviour (menu tabs, gallery filter/lightbox, carousel,
 * forms) lives in small inline scripts at the bottom of each HTML file.
 * -----------------------------------------------------------------------
 */

(function () {
  "use strict";

  const SOCIAL_ICONS = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.2c0-.9.3-1.5 1.6-1.5h1.5V4.1C15.8 4 14.8 4 13.7 4 11 4 9.5 5.6 9.5 8.4v2.1H7v3h2.5V21h4z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M3 3l8 9.5L3.4 21H6l6-7 5 7h4l-8.4-10L20 3h-2.6l-5.4 6.3L7.5 3H3z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4h0s-4 0-6.8.1c-.4 0-1.2.1-2 .9-.6.7-.8 2.2-.8 2.2S2.2 9 2.2 10.8v1.4C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.8 2.2c.8.8 1.8.8 2.3.9 1.6.2 6.5.2 6.5.2s4 0 6.8-.1c.4 0 1.2-.1 2-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z"/></svg>',
  };

  /* ------------------------------------------------------------------ */
  /*  Header                                                            */
  /* ------------------------------------------------------------------ */
  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount || !window.SITE) return;
    const { settings, nav, navCta } = window.SITE;
    const currentPage = (window.location.pathname.split("/").pop() || "index.html");

    const navLinks = nav
      .map((item) => {
        const isActive = item.href === currentPage || (currentPage === "" && item.href === "index.html");
        return `<a href="${item.href}" class="nav-link font-mono-label text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors ${isActive ? "active text-gold" : ""}">${item.label}</a>`;
      })
      .join("");

    const mobileLinks = nav
      .map(
        (item) =>
          `<a href="${item.href}" class="block py-3 text-lg font-display border-b border-cream/10 hover:text-gold transition-colors">${item.label}</a>`
      )
      .join("");

    mount.innerHTML = `
      <div class="fixed top-0 left-0 right-0 z-50 bg-maroon" id="header-inner">
        <nav class="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3.5" aria-label="Primary navigation">
          <a href="index.html" class="flex items-center gap-2 group" aria-label="${settings.name} home">
          
            <span class="w-11 h-11 flex items-center justify-center overflow-hidden">
  <img id="logoImg" src="assets/images/sitaralogo.png" alt="Logo" class="w-full h-full object-cover" />
</span>
            <span class="font-display text-lg sm:text-xl text-cream tracking-wide group-hover:text-gold transition-colors">${settings.shortName}</span>
          </a>

          <div class="hidden lg:flex items-center gap-8">
            ${navLinks}
          </div>

          <div class="hidden lg:block">
            <a href="${navCta.href}" class="btn-primary px-5 py-2.5 rounded-full font-mono-label text-xs uppercase tracking-widest">${navCta.label}</a>
          </div>

          <button id="mobile-menu-btn" class="lg:hidden text-cream p-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </nav>
      </div>

      <div id="mobile-menu" class="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-maroon z-[60] p-8 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div class="flex justify-between items-center mb-10">
          <span class="font-display text-xl text-gold">${settings.shortName}</span>
          <button id="mobile-menu-close" class="text-cream p-2" aria-label="Close menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <nav class="flex flex-col">${mobileLinks}</nav>
        <a href="${navCta.href}" class="btn-primary block text-center mt-8 px-5 py-3 rounded-full font-mono-label text-xs uppercase tracking-widest">${navCta.label}</a>
      </div>
      <div id="mobile-menu-backdrop" class="fixed inset-0 bg-black/60 z-[55] hidden lg:hidden"></div>
    `;

    setupHeaderBehaviour();
  }

  function setupHeaderBehaviour() {
    const headerInner = document.getElementById("header-inner");
    const mobileMenu = document.getElementById("mobile-menu");
    const backdrop = document.getElementById("mobile-menu-backdrop");
    const openBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("mobile-menu-close");

    function onScroll() {
      if (window.scrollY > 40) {
        headerInner.classList.add("header-scrolled");
      } else {
        headerInner.classList.remove("header-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function openMenu() {
      mobileMenu.classList.add("open");
      backdrop.classList.remove("hidden");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
    }
    function closeMenu() {
      mobileMenu.classList.remove("open");
      backdrop.classList.add("hidden");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
    }
    openBtn && openBtn.addEventListener("click", openMenu);
    closeBtn && closeBtn.addEventListener("click", closeMenu);
    backdrop && backdrop.addEventListener("click", closeMenu);
  }

  /* ------------------------------------------------------------------ */
  /*  Footer                                                             */
  /* ------------------------------------------------------------------ */
  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount || !window.SITE) return;
    const { settings, footer, contact, nav } = window.SITE;

    const quickLinks = footer.quickLinks
      .map((l) => `<li><a href="${l.href}" class="underline-grow text-cream/70 hover:text-gold transition-colors">${l.label}</a></li>`)
      .join("");

    const socials = contact.socials
      .map(
        (s) =>
          `<a href="${s.href}" aria-label="${s.platform}" class="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold transition-colors">${SOCIAL_ICONS[s.icon] || ""}</a>`
      )
      .join("");

    const miniGallery = (footer.miniGallery || [])
      .map(
        (src) =>
          `<a href="gallery.html" class="block w-full aspect-square overflow-hidden rounded-md border border-cream/15"><img src="${src}" alt="Restaurant gallery thumbnail" class="w-full h-full object-cover" loading="lazy" /></a>`
      )
      .join("");

    mount.innerHTML = `
      <footer class="relative bg-maroon text-cream pt-16 pb-8 px-5 sm:px-8" role="contentinfo">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="md:col-span-1">
            <a href="index.html" class="flex items-center gap-2 mb-4">
            <span class="w-11 h-11 flex items-center justify-center overflow-hidden">
  <img id="logoImg" src="assets/images/sitaralogo.png" alt="Logo" class="w-full h-full object-cover" />
</span>
           
              <span class="font-display text-xl text-cream">${settings.shortName}</span>
            </a>
            <p class="text-cream/70 leading-relaxed mb-5 text-sm">${footer.about}</p>
            <div class="flex gap-3">${socials}</div>
          </div>

          <div>
            <h3 class="font-mono-label text-xs uppercase text-gold mb-4">Contact Details</h3>
            <ul class="space-y-2 text-sm text-cream/75">
              <li>${contact.address.line1}, ${contact.address.line2}</li>
              <li><a href="tel:${contact.phone.replace(/\s+/g, "")}" class="hover:text-gold">${contact.phone}</a></li>
              <li><a href="mailto:${contact.email}" class="hover:text-gold">${contact.email}</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-mono-label text-xs uppercase text-gold mb-4">Quick Links</h3>
            <ul class="space-y-2">${quickLinks}</ul>
          </div>

          <div>
            <h3 class="font-mono-label text-xs uppercase text-gold mb-4">From the Gallery</h3>
            <div class="grid grid-cols-3 gap-2">${miniGallery}</div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto divider-rule mt-12 mb-6 opacity-40"></div>

        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/60">
          <p>© <span id="footer-year"></span> ${footer.copyrightText}</p>
          <div class="flex gap-5">
            ${footer.legalLinks.map((l) => `<a href="${l.href}" class="hover:text-gold transition-colors">${l.label}</a>`).join("")}
          </div>
        </div>
      </footer>
    `;

    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const newsletterForm = document.getElementById("newsletter-form");
    const newsletterMsg = document.getElementById("newsletter-message");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newsletterMsg.textContent = "Thanks for subscribing — look out for our next note.";
        newsletterForm.reset();
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Scroll reveal                                                      */
  /* ------------------------------------------------------------------ */
  function setupScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /*  Animated counters                                                  */
  /* ------------------------------------------------------------------ */
  function setupCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute("data-counter"));
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = target % 1 !== 0;
          const duration = 1600;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString("en-IN")) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /*  Init                                                               */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    setupScrollReveal();
    setupCounters();
  });

  /* Expose a couple of helpers for page-specific scripts */
  window.SiteApp = {
    setupScrollReveal,
    setupCounters,
  };
})();
