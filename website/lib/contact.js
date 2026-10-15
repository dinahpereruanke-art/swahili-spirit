// WhatsApp needs the number in international format: 254 + the number without the leading 0
export const WHATSAPP_NUMBER = "254705592583";

// What visitors see on the website
export const PHONE_DISPLAY = "0705592583 / 07043033932";

export const EMAIL = "dinahpereruan.ke@gmail.com"; // placeholder, replace with the real email

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;