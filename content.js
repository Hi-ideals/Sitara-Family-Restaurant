/**
 * content.js
 * -----------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for all text, images, prices, links and data
 * used across every page of the Sitara Family Restaurant website.
 *
 * Nothing in the HTML/JS files should hard-code copy, prices or image
 * URLs — everything is read from the SITE object below at runtime by
 * assets/js/app.js and the page-specific scripts.
 *
 * REAL DETAILS USED: business name, address, phone numbers, email and
 * the menu categories/dish names visible on the current homepage.
 *
 * PLACEHOLDERS — replace before publishing:
 *   - All photos (currently https://picsum.photos placeholders)
 *   - Chef name/bio (about.chef)
 *   - Specific menu prices (menu.items[].price — set to null = "Ask Staff")
 *   - Timeline milestones (about.timeline)
 *   - Opening hours (contact.hours)
 *   - Testimonials (testimonials — add your real guest reviews)
 *   - Special offers (offers — these are sample placeholders)
 * -----------------------------------------------------------------------
 */

const SITE = {

  /* ---------------------------------------------------------------- */
  /*  GLOBAL SETTINGS                                                  */
  /* ---------------------------------------------------------------- */
  settings: {
    name: "Sitara Family Restaurant",
    shortName: "Sitara Family Restaurant",
    tagline: "Multi-Cuisine Family Dining in Bidar",
    description:
      "Sitara Family Restaurant is a multi-cuisine fine-dining restaurant in Bidar, Karnataka, serving North Indian, South Indian, Chinese and Continental dishes alongside tandoor specialities, with a private dining hall for celebrations and gatherings.",
    currency: "₹",
    logo: "assets/images/sitaralogo.png",
    /* TODO: replace with your real logo file, e.g. "assets/images/logo.png" */
    favicon: "assets/images/sitaralogo.png",
    seoKeywords:
      "multi-cuisine restaurant Bidar, North Indian restaurant Bidar, South Indian restaurant Bidar, Chinese food Bidar, family restaurant Bidar Karnataka, private dining hall Bidar, tandoori restaurant Bidar",
  },

  /* ---------------------------------------------------------------- */
  /*  NAVIGATION                                                       */
  /* ---------------------------------------------------------------- */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Menu", href: "menu.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Reservation", href: "reservation.html" },
    { label: "Contact", href: "contact.html" },
  ],

  navCta: { label: "Book a Table", href: "reservation.html" },

  /* ---------------------------------------------------------------- */
  /*  HOME — HERO                                                      */
  /* ---------------------------------------------------------------- */
  hero: {
    /* TODO: replace with your own slider photos */
    slides: [
      "assets/images/slider12.png",
      "assets/images/slider11.png",
      "assets/images/slider10.png",
      "assets/images/slider9.png",
    ],
    eyebrow: "Multi-Cuisine Fine Dining · Bidar",
    title: "Welcome to Sitara Family Restaurant",
    subtitle:
      "A multi-cuisine address in Bidar serving North Indian, South Indian, Chinese and Continental food, with tandoor specialities and a private dining hall for celebrations and meetings.",
    primaryCta: { label: "Book a Table", href: "reservation.html" },
    secondaryCta: { label: "View Menu", href: "menu.html" },
    stats: [
      { value: 4, suffix: "", label: "Cuisines Served" },
      { value: 6, suffix: "+", label: "Menu Categories" },
      { value: 2, suffix: "", label: "Booking Lines" },
      { value: 1, suffix: "", label: "Private Dining Hall" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — FEATURED DISHES                                           */
  /*  Real dish names from the current menu — prices are placeholders, */
  /*  set price to null to show "Ask Staff" until you confirm pricing. */
  /* ---------------------------------------------------------------- */
  featuredDishes: [
    {
      id: "f1",
      name: "Tandoori Chicken (Full)",
      category: "Tandoori",
      image: "assets/images/Tandoori Chicken (Full).png",
      description: "Whole chicken marinated overnight and finished in the tandoor.",
      price: null,
      tag: "Popular",
    },
    {
      id: "f2",
      name: "Gobi Manchurian",
      category: "Veg. Starters",
      image: "assets/images/Gobi Manchurian.png",
      description: "Crisp cauliflower florets tossed in a tangy Indo-Chinese sauce.",
      price: null,
      tag: "Vegetarian",
    },
    {
      id: "f3",
      name: "Paneer Butter Masala",
      category: "Veg. Curries",
      image: "assets/images/Paneer Butter Masala.png",
      description: "Cottage cheese in a rich, buttery tomato gravy.",
      price: null,
      tag: "Bestseller",
    },
    {
      id: "f4",
      name: "Schezwan Chicken Fried Rice",
      category: "Fried Rice",
      image: "assets/images/Schezwan Chicken Fried Rice.png",
      description: "Wok-tossed rice with chicken in a fiery Schezwan sauce.",
      price: null,
      tag: "Chinese",
    },
  ],

  /* ---------------------------------------------------------------- */
  /*  HOME — ABOUT PREVIEW                                             */
  /* ---------------------------------------------------------------- */
  aboutPreview: {
    eyebrow: "Our Story",
    title: "A Multi-Cuisine Table for Every Occasion",
    body:
      "Sitara Family Restaurant brings spicy Andhra-style classics, North Indian gravies, Indo-Chinese plates and a small Continental selection together under one roof in Bidar.",
    image: "assets/images/slider11.png",
    cta: { label: "Read Our Story", href: "about.html" },
    highlights: [
      "North Indian, South Indian, Chinese & Continental menus",
      "Dedicated tandoor counter",
      "Private dining hall for celebrations & meetings",
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — BOOKING STRIP (private dining call-out)                   */
  /* ---------------------------------------------------------------- */
  bookingStrip: {
    title: "Book the Private Dining Hall",
    subtitle: "Give us a call and we'll have the room set up for you",
    phoneDisplay: "+91 89510 04222",
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — CUISINE TYPES (four-card strip)                           */
  /* ---------------------------------------------------------------- */
  cuisineTypes: [
    {
      id: "south-indian",
      title: "South Indian",
      icon: "assets/images/sou1.png",
      description: "The cuisines of Andhra and Telangana are the spiciest in all of India. Generous use of chilli powder and tamarind make the dishes tangy and hot.",
    },
    {
      id: "north-indian",
      title: "North Indian",
      icon: "assets/images/nor.png",
      description: "Food from North India is characterized by its thick, tasty gravies. The use of dried fruits and nuts is fairly common even in everyday foods.",
    },
    {
      id: "chinese",
      title: "Chinese",
      icon: "assets/images/chi.png",
      description: "Chilli chicken, fried rice are liked by one and all. But over a period of time actual Chinese cooking has Indianized and taken up the form of Indo- Chinese..",
    },
    {
      id: "continental",
      title: "Continental",
      icon: "assets/images/cont.png",
      description: "Foods from America, England, Australia ,etc. their own distinctive features, the food from all these countries is famous as continental food.",
    },
  ],

  /* ---------------------------------------------------------------- */
  /*  HOME — DINING EXPERIENCE BAND                                     */
  /* ---------------------------------------------------------------- */
  diningExperience: {
    eyebrow: "The Sitara Experience",
    title: "The Complete Bidar Dining Experience",
    body: "Secluded corners for quiet evenings, open seating for family gatherings, and a private hall for celebrations and meetings — Sitara Family Restaurant brings spicy Andhra classics, North Indian gravies, Indo-Chinese plates and a small Continental selection to one table in the heart of Bidar.",
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — ON-PAGE MENU PREVIEW (by category, text columns)           */
  /*  Real categories & dish names from the current homepage menu.      */
  /* ---------------------------------------------------------------- */
  homeMenuPreview: {
    eyebrow: "A Taste of the Menu",
    title: "From the Kitchen",
    image: "assets/images/slider11.png",
    columns: [
      { category: "Soups", items: "Tomato Soup, Veg. Corn Soup, Veg. Lemon & Coriander, Veg. Hot & Sour Soup, Veg. Manchow Soup" },
      { category: "Noodles", items: "Veg Hakka Noodles, Schezwan Veg Noodles, Chicken Hakka Noodles, Chicken Garlic Noodles, Schezwan Chicken Noodles" },
      { category: "Veg. Starters", items: "Veg-65, Veg Manchurian (Dry/Wet), Gobi-65, Chilli Gobi (Dry/Wet), Gobi Manchurian (Dry/Wet)" },
      { category: "Veg. Curries", items: "Plain Palak, Mixed Vegetable Curry, Veg. Kolhapuri, Malai Kofta, Kadai Veg., Veg. Chatpata, Paneer Butter Masala" },
      { category: "Tandoori", items: "Paneer Tikka, Kalmi Kabab (Half/Full), Tandoori Chicken (Half/Full), Chicken Tikka, Fish Tikka" },
      { category: "Fried Rice", items: "Jeera Rice, Veg Fried Rice, Schezwan Veg. Fried Rice, Egg Fried Rice, Chicken Fried Rice, Schezwan Chicken Fried Rice, Mixed Fried Rice" },
    ],
    cta: { label: "View Full Menu", href: "menu.html" },
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — SPECIAL OFFERS                                            */
  /*  SAMPLE PLACEHOLDERS — replace with your actual current offers    */
  /*  before publishing.                                                */
  /* ---------------------------------------------------------------- */
  offers: [
    {
      id: "o1",
      title: "Add Your Weekday Offer",
      description: "Describe a weekday lunch or dinner deal here.",
      image: "assets/images/img1.jpg",
      badge: "Sample",
    },
    {
      id: "o2",
      title: "Add Your Weekend Offer",
      description: "Describe a weekend family deal here.",
      image: "assets/images/img2.jpg",
      badge: "Sample",
    },
    {
      id: "o3",
      title: "Add a Celebration Package",
      description: "Describe a birthday/anniversary package here.",
      image: "assets/images/img3.jpg",
      badge: "Sample",
    },
  ],

  /* ---------------------------------------------------------------- */
  /*  HOME — KITCHEN RECOMMENDATIONS                                   */
  /*  PLACEHOLDER — add your real chef's name/photo if you'd like to   */
  /*  feature them; left generic until you confirm details.            */
  /* ---------------------------------------------------------------- */
  chefRecommendations: {
    eyebrow: "From the Kitchen",
    title: "Today's Recommendations",
    body: "A few dishes the kitchen suggests when guests ask 'what should we order?'",
    chef: {
      name: "Add Your Chef's Name",
      role: "Executive Chef",
      image: "assets/images/slider12.png",
    },
    dishes: [
      { id: "c1", name: "Tandoori Chicken (Full)", image: "assets/images/Tandoori Chicken (Full).png", price: null },
      { id: "c2", name: "Kalmi Kabab", image: "assets/images/project-8.jpg", price: null },
      { id: "c3", name: "Gobi Manchurian", image: "assets/images/Gobi Manchurian.png", price: null },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  HOME — GALLERY PREVIEW (subset, full set lives in gallery.html)  */
  /*  TODO: replace all with your own restaurant photos.                */
  /* ---------------------------------------------------------------- */
  galleryPreview: [
    { image: "assets/images/project-2.jpg", alt: "Dining hall seating" },
    { image: "assets/images/project-5.jpg", alt: "Tandoori platter" },
    { image: "assets/images/project-8.jpg", alt: "Private dining hall" },
    { image: "assets/images/project-11.jpg", alt: "Chinese starters plate" },
    { image: "assets/images/img1.jpg", alt: "Family table setting" },
    { image: "assets/images/img2.jpg", alt: "Tandoor kitchen counter" },
  ],

  /* ---------------------------------------------------------------- */
  /*  TESTIMONIALS                                                     */
  /*  PLACEHOLDERS — paste in your real guest reviews (with their      */
  /*  permission) before publishing. Do not invent reviews.            */
  /* ---------------------------------------------------------------- */
  testimonials: [
    {
      id: "t1",
      name: "Naveen",
      role: "Guest",
      avatar: "https://picsum.photos/seed/sitarareviewavatar1/120/120",
      rating: 5,
      quote: "This is one place where u can have always have maximum expectations for a good Andhra cuisine Mutton RR is never a disappointment and is my favorite starter. Mutton kheema and gongura chicken were okiesh. Sambar rice and curd Rice was again very good overall it was a decent experience note.",
    },
    {
      id: "t2",
      name: "Deepu",
      role: "Guest",
      avatar: "https://picsum.photos/seed/sitarareviewavatar2/120/120",
      rating: 5,
      quote: "If you ever get tired of Hyderabadi Biryani, you can step in here for some delicious Andhra style Biryanis. The ambience is decent and the Fried Piece Chicken Biriyani is mouthwatering !!",
    },
    {
      id: "t3",
      name: "Komal",
      role: "Guest",
      avatar: "https://picsum.photos/seed/sitarareviewavatar3/120/120",
      rating: 5,
      quote: "This is one place where u can have always have maximum expectations for a good Andhra cuisine Mutton RR is never a disappointment and is my favorite starter. Mutton kheema and gongura chicken were okiesh. Sambar rice and curd Rice was again very good overall it was a decent experience note.",
    },
  ],

  /* ---------------------------------------------------------------- */
  /*  RESERVATION CTA (home strip)                                     */
  /* ---------------------------------------------------------------- */
  reservationCta: {
    eyebrow: "Book Ahead",
    title: "Your Table at Sitara is Waiting",
    body: "Walk-ins are always welcome, but call ahead if you'd like the private dining hall set up for your group.",
    cta: { label: "Reserve Now", href: "reservation.html" },
    phoneDisplay: "+91 89510 04222",
  },

  /* ---------------------------------------------------------------- */
  /*  ABOUT PAGE                                                        */
  /* ---------------------------------------------------------------- */
  about: {
    heroImage: "assets/images/slider10.png",
    pageTitle: "About Us",
    pageSubtitle: "Multi-cuisine fine dining in the heart of Bidar.",
    story: {
      eyebrow: "Our Story",
      title: "A Multi-Cuisine Kitchen, Built for Every Table",
      paragraphs: [
        "Sitara Family Restaurant has built a reputation in Bidar for generous, well-spiced multi-cuisine food without pretension — from fiery Andhra-style starters to comforting North Indian gravies.",
        "The dining room is laid out for every kind of evening: quiet corner tables for a couple, open seating for a big family get-together, and a private hall for celebrations and meetings.",
        "Whether it's a wok-tossed Chinese plate, a tandoor platter, or a simple curry-and-rice meal, the kitchen treats every cuisine on the menu — North Indian, South Indian, Chinese and Continental — with the same care.",
      ],
      image: "assets/images/slider11.png",
    },
    missionVision: {
      mission: {
        title: "Our Mission",
        body: "To serve generous, properly spiced multi-cuisine food in a comfortable, family-friendly setting — without cutting corners on quality or pace.",
      },
      vision: {
        title: "Our Vision",
        body: "To remain Bidar's trusted choice for every kind of gathering — quiet dinners, family celebrations, and business meet-ups alike.",
      },
    },
    /* PLACEHOLDER — replace with your real head chef's name and bio */
    chef: {
      eyebrow: "Meet the Kitchen",
      name: "Add Your Head Chef's Name",
      role: "Executive Chef",
      image: "assets/images/slider9.png",
      bio: [
        "Add a short introduction for your head chef here — training background, specialities, and what guests can expect from the kitchen.",
      ],
      quote: "Add a short quote from your chef here.",
    },
    /* TODO: replace with your real interior photos */
    gallery: [
      { image: "assets/images/slider1.png", alt: "Main dining hall" },
      { image: "assets/images/slider2.png", alt: "Private dining hall" },
      { image: "assets/images/slider3.png", alt: "Tandoor kitchen counter" },
      { image: "assets/images/slider4.png", alt: "Family seating area" },
      { image: "assets/images/slider5.png", alt: "Cabin seating" },
      { image: "assets/images/slider9.png", alt: "Entrance" },
    ],
    /* PLACEHOLDER — fill in your actual restaurant's milestones */
    timeline: [
      { year: "20XX", title: "Add a Milestone", body: "Describe a key moment in your restaurant's journey here." },
      { year: "20XX", title: "Add a Milestone", body: "Describe a key moment in your restaurant's journey here." },
      { year: "20XX", title: "Add a Milestone", body: "Describe a key moment in your restaurant's journey here." },
      { year: "20XX", title: "Add a Milestone", body: "Describe a key moment in your restaurant's journey here." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  MENU PAGE                                                         */
  /*  Categories match the real homepage menu. Andhra Specials added    */
  /*  based on the stated South Indian/Andhra focus — confirm & edit.   */
  /*  Prices are set to null ("Ask Staff") until you provide your        */
  /*  actual price list.                                                 */
  /* ---------------------------------------------------------------- */
  menu: {
    pageTitle: "Our Menu",
    pageSubtitle: "North Indian, South Indian, Chinese & Continental — all under one roof.",
    heroImage: "assets/images/img2.jpg",
    categories: [
      { id: "soups", label: "Soups" },
      { id: "noodles", label: "Noodles" },
      { id: "veg-starters", label: "Veg. Starters" },
      { id: "veg-curries", label: "Veg. Curries" },
      { id: "andhra-specials", label: "Andhra Specials" },
      { id: "tandoori", label: "Tandoori" },
      { id: "fried-rice", label: "Fried Rice" },
      { id: "desserts", label: "Desserts" },
      { id: "beverages", label: "Beverages" },
    ],
    items: [
      /* ---------------- Soups ---------------- */
      { id: "so1", category: "soups", name: "Tomato Soup", description: "Classic tomato soup, lightly spiced.", price: null, image: "assets/menu/Tomato Soup.png", diet: "veg", spice: 0 },
      { id: "so2", category: "soups", name: "Veg. Corn Soup", description: "Sweet corn soup with mixed vegetables.", price: null, image: "assets/menu/Veg. Corn Soup.png", diet: "veg", spice: 0 },
      { id: "so3", category: "soups", name: "Veg. Lemon & Coriander Soup", description: "Light broth finished with lemon and fresh coriander.", price: null, image: "assets/menu/Veg. Lemon & Coriander Soup.png", diet: "veg", spice: 0 },
      { id: "so4", category: "soups", name: "Veg. Hot & Sour Soup", description: "Tangy, peppery vegetable soup.", price: null, image: "assets/menu/Veg. Hot & Sour Soup.jpg", diet: "veg", spice: 2 },
      { id: "so5", category: "soups", name: "Veg. Manchow Soup", description: "Thick, peppery soup topped with crispy noodles.", price: null, image: "assets/menu/Veg. Manchow Soup.png", diet: "veg", spice: 2 },

      /* ---------------- Noodles ---------------- */
      { id: "no1", category: "noodles", name: "Veg Hakka Noodles", description: "Wok-tossed noodles with shredded vegetables.", price: null, image: "assets/menu/noodels/Veg Hakka Noodles.png", diet: "veg", spice: 1 },
      { id: "no2", category: "noodles", name: "Schezwan Veg Noodles", description: "Hakka noodles tossed in a fiery Schezwan sauce.", price: null, image: "assets/menu/noodels/Schezwan Veg Noodles.webp", diet: "veg", spice: 3 },
      { id: "no3", category: "noodles", name: "Chicken Hakka Noodles", description: "Wok-tossed noodles with chicken and vegetables.", price: null, image: "assets/menu/noodels/Chicken Hakka Noodles.jfif", diet: "non-veg", spice: 1 },
      { id: "no4", category: "noodles", name: "Chicken Garlic Noodles", description: "Noodles tossed with chicken and roasted garlic.", price: null, image: "assets/menu/noodels/Chicken Garlic Noodles.jfif", diet: "non-veg", spice: 2 },
      { id: "no5", category: "noodles", name: "Schezwan Chicken Noodles", description: "Hakka noodles with chicken in Schezwan sauce.", price: null, image: "assets/menu/noodels/Schezwan Chicken Noodles.jfif", diet: "non-veg", spice: 3 },

      /* ---------------- Veg. Starters ---------------- */
      { id: "vs1", category: "veg-starters", name: "Veg-65", description: "Crisp-fried mixed vegetables tossed in spices.", price: null, image: "assets/menu/Veg. Starters/Veg-65.jfif", diet: "veg", spice: 2 },
      { id: "vs2", category: "veg-starters", name: "Veg Manchurian (Dry/Wet)", description: "Vegetable dumplings in a classic Indo-Chinese sauce.", price: null, image: "assets/menu/Veg. Starters/Veg Manchurian Dry Wet.webp", diet: "veg", spice: 2 },
      { id: "vs3", category: "veg-starters", name: "Gobi-65", description: "Crisp-fried cauliflower tossed in spice (seasonal).", price: null, image: "assets/menu/Veg. Starters/Gobi-65.jfif", diet: "veg", spice: 2 },
      { id: "vs4", category: "veg-starters", name: "Chilli Gobi (Dry/Wet)", description: "Cauliflower florets in a tangy chilli sauce.", price: null, image: "assets/menu/Veg. Starters/Chilli Gobi Dry Wet.jpg", diet: "veg", spice: 3 },
      { id: "vs5", category: "veg-starters", name: "Gobi Manchurian (Dry/Wet)", description: "Cauliflower florets in a classic Manchurian sauce.", price: null, image: "assets/menu/Veg. Starters/Gobi Manchurian Dry Wet.jpg", diet: "veg", spice: 2 },

      /* ---------------- Veg. Curries ---------------- */
      { id: "vc1", category: "veg-curries", name: "Plain Palak", description: "Simple, lightly spiced spinach curry.", price: null, image: "assets/menu/Veg. Curries/Plain Palak.webp", diet: "veg", spice: 1 },
      { id: "vc2", category: "veg-curries", name: "Mixed Vegetable Curry", description: "Seasonal vegetables in a home-style gravy.", price: null, image: "assets/menu/Veg. Curries/Mixed Vegetable Curry.jfif", diet: "veg", spice: 1 },
      { id: "vc3", category: "veg-curries", name: "Veg. Kolhapuri", description: "Mixed vegetables in a spicy Kolhapuri-style gravy.", price: null, image: "assets/menu/Veg. Curries/Veg-Kolhapuri-4.jpg", diet: "veg", spice: 3 },
      { id: "vc4", category: "veg-curries", name: "Malai Kofta", description: "Vegetable-paneer dumplings in a creamy gravy.", price: null, image: "assets/menu/Veg. Curries/Malai Kofta.jpg", diet: "veg", spice: 1 },
      { id: "vc5", category: "veg-curries", name: "Kadai Veg.", description: "Vegetables tossed in a kadai-style masala.", price: null, image: "assets/menu/Veg. Curries/Kadai Veg..jfif", diet: "veg", spice: 2 },
      { id: "vc6", category: "veg-curries", name: "Veg. Chatpata", description: "Tangy, spiced mixed vegetable curry.", price: null, image: "assets/menu/Veg. Curries/Veg. Chatpata.webp", diet: "veg", spice: 2 },
      { id: "vc7", category: "veg-curries", name: "Paneer Butter Masala", description: "Cottage cheese in a rich, buttery tomato gravy.", price: null, image: "assets/menu/Veg. Curries/Paneer Butter Masala.jpg", diet: "veg", spice: 1 },

      /* ---------------- Andhra Specials ---------------- */
      /* Based on the stated South Indian/Andhra focus — confirm and edit with your exact dishes. */
      { id: "an1", category: "andhra-specials", name: "Mutton Rara", description: "Andhra-style minced and chunked mutton curry.", price: null, image: "assets/menu/Andhra Specials/Mutton Rara.jpg", diet: "non-veg", spice: 3 },
      { id: "an2", category: "andhra-specials", name: "Gongura Chicken", description: "Chicken curry with tangy sorrel leaf (gongura).", price: null, image: "assets/menu/Andhra Specials/Gongura Chicken.jpg", diet: "non-veg", spice: 3 },
      { id: "an3", category: "andhra-specials", name: "Fish Vepudu", description: "Andhra-style pan-fried fish, generously spiced.", price: null, image: "assets/menu/Andhra Specials/Fish Vepudu.jpg", diet: "non-veg", spice: 3 },
      { id: "an4", category: "andhra-specials", name: "Chicken 65", description: "Deep-fried, spice-coated chicken bites.", price: null, image: "assets/menu/Andhra Specials/Chicken 65.jfif", diet: "non-veg", spice: 3 },
      { id: "an5", category: "andhra-specials", name: "Sambar Rice", description: "Steamed rice with traditional South Indian sambar.", price: null, image: "assets/menu/Andhra Specials/Sambar Rice.jfif", diet: "veg", spice: 1 },
      { id: "an6", category: "andhra-specials", name: "Curd Rice", description: "Steamed rice folded with fresh curd, lightly tempered.", price: null, image: "assets/menu/Andhra Specials/Curd Rice.jfif", diet: "veg", spice: 0 },

      /* ---------------- Tandoori ---------------- */
      { id: "ta1", category: "tandoori", name: "Paneer Tikka", description: "Cottage cheese cubes marinated and grilled in the tandoor.", price: null, image: "assets/menu/Tandoori/Paneer Tikka.webp", diet: "veg", spice: 2 },
      { id: "ta2", category: "tandoori", name: "Kalmi Kabab (Half)", description: "Chicken leg piece marinated and tandoor-grilled.", price: null, image: "assets/menu/Tandoori/Kalmi Kabab Half.jfif", diet: "non-veg", spice: 2 },
      { id: "ta3", category: "tandoori", name: "Tandoori Chicken (Half)", description: "Classic tandoori chicken, half portion.", price: null, image: "assets/menu/Tandoori/Tandoori Chicken (Half).jfif", diet: "non-veg", spice: 2 },
      { id: "ta4", category: "tandoori", name: "Chicken Tikka", description: "Boneless chicken marinated and grilled in the tandoor.", price: null, image: "assets/menu/Tandoori/Chicken Tikka.jfif", diet: "non-veg", spice: 2 },
      { id: "ta5", category: "tandoori", name: "Kalmi Kabab (Full)", description: "Chicken leg pieces marinated and tandoor-grilled, full portion.", price: null, image: "assets/menu/Tandoori/Kalmi Kabab (Full).jfif", diet: "non-veg", spice: 2 },
      { id: "ta6", category: "tandoori", name: "Fish Tikka", description: "Marinated fish grilled in the tandoor.", price: null, image: "assets/menu/Tandoori/Fish Tikka.jfif", diet: "non-veg", spice: 2 },
      { id: "ta7", category: "tandoori", name: "Tandoori Chicken (Full)", description: "Whole chicken marinated overnight and finished in the tandoor.", price: null, image: "assets/menu/Tandoori/Tandoori Chicken (Full).jfif", diet: "non-veg", spice: 2 },

      /* ---------------- Fried Rice ---------------- */
      { id: "fr1", category: "fried-rice", name: "Jeera Rice", description: "Steamed rice tempered with cumin.", price: null, image: "assets/menu/Fried Rice/Jeera Rice.jfif", diet: "veg", spice: 0 },
      { id: "fr2", category: "fried-rice", name: "Veg Fried Rice", description: "Wok-tossed rice with mixed vegetables.", price: null, image: "assets/menu/Fried Rice/Veg Fried Rice.jpg", diet: "veg", spice: 1 },
      { id: "fr3", category: "fried-rice", name: "Schezwan Veg. Fried Rice", description: "Vegetable fried rice in a spicy Schezwan sauce.", price: null, image: "assets/menu/Fried Rice/Schezwan Veg. Fried Rice.jfif", diet: "veg", spice: 3 },
      { id: "fr4", category: "fried-rice", name: "Egg Fried Rice", description: "Wok-tossed rice with egg and spring onion.", price: null, image: "assets/menu/Fried Rice/Egg Fried Rice.jpg", diet: "non-veg", spice: 1 },
      { id: "fr5", category: "fried-rice", name: "Chicken Fried Rice", description: "Wok-tossed rice with chicken and vegetables.", price: null, image: "assets/menu/Fried Rice/Chicken Fried Rice.jpg", diet: "non-veg", spice: 1 },
      { id: "fr6", category: "fried-rice", name: "Schezwan Chicken Fried Rice", description: "Chicken fried rice in a fiery Schezwan sauce.", price: null, image: "assets/menu/Fried Rice/Schezwan Veg. Fried Rice.jfif", diet: "non-veg", spice: 3 },
      { id: "fr7", category: "fried-rice", name: "Mixed Fried Rice", description: "Fried rice with a mix of egg, chicken and vegetables.", price: null, image: "assets/menu/Fried Rice/Mixed Fried Rice.jfif", diet: "non-veg", spice: 1 },

      /* ---------------- Desserts (placeholder — confirm your list) ---------------- */
      { id: "de1", category: "desserts", name: "Gulab Jamun", description: "Warm milk-solid dumplings in cardamom syrup.", price: null, image: "assets/menu/Fried Rice/Gulab Jamun.webp", diet: "veg", spice: 0 },
      { id: "de2", category: "desserts", name: "Ice Cream", description: "Ask staff for today's available flavours.", price: null, image: "assets/menu/Fried Rice/Ice Cream.jpg", diet: "veg", spice: 0 },

      /* ---------------- Beverages (placeholder — confirm your list) ---------------- */
      { id: "be1", category: "beverages", name: "Masala Chai", description: "House-style spiced tea.", price: null, image: "assets/menu/Fried Rice/Masala Chai.jfif", diet: "veg", spice: 0 },
      { id: "be2", category: "beverages", name: "Sweet Lassi", description: "Whipped yogurt drink, lightly sweetened.", price: null, image: "assets/menu/Fried Rice/Sweet Lassi.jfif", diet: "veg", spice: 0 },
      { id: "be3", category: "beverages", name: "Soft Drinks", description: "Ask staff for available options.", price: null, image: "assets/menu/Fried Rice/Soft Drinks.jpg", diet: "veg", spice: 0 },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  GALLERY PAGE — TODO: replace all with your own restaurant photos */
  /* ---------------------------------------------------------------- */
  galleryPage: {
    pageTitle: "Gallery",
    pageSubtitle: "A look inside the dining room and the dishes that leave the kitchen.",
    heroImage: "assets/images/img1.jpg",
    filters: [
      { id: "all", label: "All" },
      { id: "food", label: "Food" },
      { id: "interior", label: "Interior" },
      { id: "events", label: "Events" },
      { id: "drinks", label: "Drinks" },
    ],
    images: [
      { id: "g1", category: "food", image: "assets/images/slider1.png", alt: "Tandoori platter" },
      { id: "g2", category: "interior", image: "assets/images/slider11.png", alt: "Main dining hall" },
      { id: "g3", category: "food", image: "assets/images/slider2.png", alt: "Veg. starters plate" },
      { id: "g4", category: "drinks", image: "assets/images/project-5.jpg", alt: "Lassi glass" },
      { id: "g5", category: "events", image: "assets/images/About1.png", alt: "Private dining hall event" },
      { id: "g6", category: "interior", image: "assets/images/slider12.png", alt: "Tandoor kitchen counter" },
      { id: "g7", category: "food", image: "assets/images/slider3.png", alt: "Fried rice bowl" },
      { id: "g8", category: "interior", image: "assets/images/slider11.png", alt: "Family seating area" },
      { id: "g9", category: "drinks", image: "assets/images/project-5.jpg", alt: "Masala chai cup" },
      { id: "g10", category: "food", image: "assets/images/slider4.png", alt: "Gobi Manchurian bowl" },
      { id: "g11", category: "events", image: "assets/images/About2.png", alt: "Birthday celebration table" },
      { id: "g12", category: "interior", image: "assets/images/slider11.png", alt: "Cabin seating" },
      { id: "g13", category: "food", image: "assets/images/slider5.png", alt: "Kebab platter" },
      { id: "g14", category: "drinks", image: "assets/images/project-5.jpg", alt: "Soft drink glass" },
      { id: "g15", category: "events", image: "assets/images/About1.png", alt: "Family gathering table" },
      { id: "g16", category: "food", image: "assets/images/slider9.png", alt: "Tandoori chicken close-up" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  RESERVATION PAGE                                                  */
  /* ---------------------------------------------------------------- */
  reservation: {
    pageTitle: "Book a Table",
    pageSubtitle: "Tell us when you'd like to join us — we'll confirm by phone.",
    heroImage: "assets/images/slider12.png",
    guestOptions: [1, 2, 3, 4, 5, 6, 7, 8],
    timeSlots: [
      "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
      "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
    ],
    occasions: ["None", "Birthday", "Anniversary", "Business Meeting", "Family Gathering", "Other"],
    note: "For the private dining hall or groups larger than 8, please call us directly so we can set up the room.",
    confirmationMessage:
      "Thank you! Your request has been received — our team will call you shortly to confirm your table.",
  },

  /* ---------------------------------------------------------------- */
  /*  CONTACT PAGE & SHARED CONTACT DETAILS — real business details     */
  /* ---------------------------------------------------------------- */
  contact: {
    pageTitle: "Contact Us",
    pageSubtitle: "Questions, feedback, or planning a private event — we'd love to hear from you.",
    heroImage: "assets/images/slider12.png",
    address: {
      line1: "MIK Complex, Udgir Rd",
      line2: "opp. Kamat Hotel, Bidar, Karnataka 585401",
      country: "India",
    },
    phone: "+91 89510 04222",
    phone2: "+91 89510 05222",
    whatsapp: "+91 89510 04222",
    email: "sitararestarantbidar@gmail.com",
    secondaryEmail: "support@sitararestaurant.in",
    website: "www.sitararestaurant.in",
    /* No published opening hours were available — replace this placeholder. */
    hours: [
      { days: "Every Day", time: "Call to confirm today's timings" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=MIK+Complex+Udgir+Road+Bidar+Karnataka+585401&output=embed",
    socials: [
      { platform: "Facebook", href: "https://www.facebook.com/Sitara-Family-Restaurant-108912558413021", icon: "facebook" },
      { platform: "YouTube", href: "https://www.youtube.com/channel/UClwaLJqsPoD-1avr7LcLEtQ", icon: "youtube" },
      { platform: "Instagram", href: "#", icon: "instagram" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  FOOTER                                                            */
  /* ---------------------------------------------------------------- */
  footer: {
    about:
      "A multi-cuisine fine-dining restaurant in Bidar, Karnataka — serving North Indian, South Indian, Chinese and Continental food, with a private dining hall for celebrations and meetings.",
    /* TODO: replace with your own restaurant photos */
    miniGallery: [
      "assets/images/slider1.png",
      "assets/images/slider2.png",
      "assets/images/slider3.png",
      "assets/images/slider4.png",
      "assets/images/slider5.png",
      "assets/images/slider9.png",
    ],
    quickLinks: [
      { label: "About Us", href: "about.html" },
      { label: "Our Menu", href: "menu.html" },
      { label: "Gallery", href: "gallery.html" },
      { label: "Reservation", href: "reservation.html" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    copyrightText: "Sitara Family Restaurant. All rights reserved.",
  },
};

/* Expose globally for use in plain <script> tags across every page. */
if (typeof window !== "undefined") {
  window.SITE = SITE;
}
