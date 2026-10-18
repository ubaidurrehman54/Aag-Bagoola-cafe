// Replace these values with confirmed business details before publishing.
const WHATSAPP_NUMBER = "92XXXXXXXXXX";
/** @type {{ title: string; items: string[] }[]} */
const whatWeOffer = [
  { title: "Service options", items: ["Outdoor seating", "No-contact delivery", "Delivery", "Takeout", "Dine-in"] },
  { title: "Highlights", items: ["Great coffee", "Great tea selection"] },
  { title: "Offerings", items: ["Coffee", "Late-night food", "Quick bite", "Small plates"] },
  { title: "Dining options", items: ["Seating", "Table service"] },
  { title: "Atmosphere", items: ["Casual", "Trendy"] },
  { title: "Crowd", items: ["College students", "Groups"] },
  { title: "Children", items: ["Good for kids"] }
];

window.AAG_BAGOOLA_CONFIG = {
  whatsappNumber: WHATSAPP_NUMBER,
  phone: "[REPLACE: phone number]",
  address: "[REPLACE: street address], Husainabad, Karachi, Pakistan",
  hours: "[REPLACE: opening hours]",
  mapsUrl: "[REPLACE: Google Maps directions URL]",
  mapEmbedUrl: "",
  instagramUrl: "[REPLACE: Instagram profile URL]",
  leaveReviewUrl: "[REPLACE: Google review link]",
  googleReviewsUrl: "[REPLACE: Google reviews link]",
  rating: null,
  reviewCount: null,
  offer: "[REPLACE: current offer]",
  whatWeOffer
};
