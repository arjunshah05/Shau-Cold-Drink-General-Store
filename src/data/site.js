// EDIT THESE DETAILS when you are ready to publish the real business information.
export const storeDetails = {
  name: "Sahu Cold Drink & General Store",
  shortName: "Sahu Store",
  phone: "+91 8002850797", // Replace with your actual phone number
  whatsapp: "918002850797", // Country code + number, digits only
  // email: "hello@sahustore.in", // Replace or remove
  address: "Kunauli Main Market, Bihar 847451", // Replace with exact address
  mapUrl:"https://maps.app.goo.gl/G1Fbp7kPhkvWwdkY6", // Replace with your Google Maps share link
  reviewUrl: "https://maps.app.goo.gl/yiQCPW8Kk1r7cGGt6", // Replace with your Google review link if available
  openingHours: "Every day · 8:00 AM – 09:00 PM", // Update timings
  whatsappMessage: "Hello Sahu Cold Drink & General Store! I would like to know about your products."
};

export const heroContent = {
  eyebrow: "Your neighbourhood store",
  title: "Everyday essentials,",
  highlight: "all in one place.",
  description: "From chilled drinks and tasty snacks to groceries and daily needs — find the little things that make every day easier.",
  primaryCta: "Explore products",
  secondaryCta: "Chat on WhatsApp"
};

export const aboutContent = {
  heading: "A friendly store for your everyday needs.",
  description: "At Sahu Cold Drink & General Store, we make everyday shopping simple. Discover refreshing beverages, popular snacks, pantry staples and useful household essentials — all in one convenient neighbourhood stop.",
  note: "Good products. Fair prices. A warm welcome, every time."
};

export const whyChooseUs = [
  { title: "Everyday favourites", text: "A handy selection of drinks, snacks, groceries and essentials." },
  { title: "Value you’ll love", text: "Thoughtful everyday choices at pocket-friendly prices." },
  { title: "Friendly service", text: "A neighbourhood store where you can shop with ease." },
  { title: "Easy to reach", text: "Visit us in-store or get in touch before you drop by." }
];

export const contactDetails = [
  { label: "Call us", value: storeDetails.phone, href: `tel:${storeDetails.phone.replaceAll(" ", "")}` },
  { label: "Email", value: storeDetails.email, href: `mailto:${storeDetails.email}` },
  { label: "Visit us", value: storeDetails.address, href: storeDetails.mapUrl }
];
