# Sahu Cold Drink & General Store

A premium, responsive React + Tailwind CSS landing page, organized into reusable components.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## First edits to make

1. Open `src/data/site.js` and update phone, WhatsApp number, email, full address, opening hours, Google Maps URL and Google review URL.
2. Open `src/data/products.js` to update the product list and product photos.
3. Open `src/data/categories.js` to change the store categories.
4. Replace images in `public/images/` with your own real shop photos when available.
5. The Google QR artwork supplied in the conversation is included as `public/images/google-review-qr.png`. Test it with a phone before printing or publishing.

## Components

Each page section has its own component in `src/components/`: Navbar, Hero, About, Categories, ProductSection, WhyChooseUs, Gallery, GoogleReviews, Contact, Footer and WhatsAppButton.

## Important placeholders

- Phone: `+91 98765 43210`
- WhatsApp: `919876543210`
- Address: `Main Market, Moradabad, Uttar Pradesh, India`
- Map: sample Moradabad map embed
- Email: `hello@sahustore.in`

Replace all placeholders before making the website public. The provided reference URL did not expose readable page source in the inspection, so this project follows the requested premium visual direction rather than copying its source code.
