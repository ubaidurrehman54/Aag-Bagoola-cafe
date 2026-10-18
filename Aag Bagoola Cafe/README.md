# Aag Bagoola

A lightweight, responsive cafe site built with plain HTML, CSS and JavaScript. No build step or dependencies are required.

## Run locally

Open `index.html` in a browser, or serve the project folder with any static web server. For example, `npx serve .` (requires Node.js).

## Update business details and WhatsApp

Edit `config/site.js`. Set `WHATSAPP_NUMBER` to the business WhatsApp number in international format using digits only, with no `+` or spaces (for example, `92...`). Replace the phone, address, hours, map links and Instagram URL there as well. The number must be a real number before orders can be sent.

The grouped “What we offer” cards are editable in the typed JSDoc `whatWeOffer` array in `config/site.js`. Cart customer details are saved in the browser for returning customers; the cart itself is cleared after a WhatsApp order is launched.

## Edit the menu

The product list, IDs, descriptions, categories and numeric PKR prices are in the `products` array near the top of the script in `index.html`. Keep each ID unique. Prices are numeric and are formatted as `PKR 350.00` in product cards, the cart and the WhatsApp order.

## Swap in real photos

Product visuals are currently CSS placeholders, and the hero uses a remote Unsplash image. Replace the hero URL in the `.hero` CSS with a locally hosted photo, and replace each generated `.product-image` placeholder with an `<img>` using a descriptive `alt` attribute. Good shots to commission:

1. Caramel tea pouring in a thin, glowing ribbon.
2. Steam rising from a close-up cup of karak chai.
3. Glossy boba pearls with warm amber backlight.
4. Passion-fruit iced tea with popping boba and condensation.
5. Peach and green-apple iced teas side by side.
6. A chocolate boba drink with a visible straw and pearl texture.
7. An iced mocha being poured over espresso and milk.
8. A strawberry shake with fresh strawberry detail.
9. A brownie shake with brownie pieces and a dark backdrop.
10. A wide, candid view of the real cafe ambience and welcoming staff.

## Deploy to Vercel

Import the project into Vercel as a static site. No framework preset or build command is needed; set the output directory to the project root. Confirm all `[REPLACE]` values and image links before making the site public.
