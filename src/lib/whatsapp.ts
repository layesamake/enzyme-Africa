export const WHATSAPP_PHONE = "221776544250";
export const WHATSAPP_DISPLAY = "+221 77 654 42 50";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createProductOrderMessage(format: string) {
  return `Bonjour Enzyme Africa, je souhaite commander le format ${format}. Merci de me donner les informations de disponibilité et de livraison.`;
}

export function createInquiryMessage() {
  return `Bonjour Enzyme Africa, je souhaite avoir plus d'informations sur vos formats, vos prix et les conditions de livraison.`;
}
