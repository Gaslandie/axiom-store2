export const formatGNF = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n).replace(/\u202f|\u00a0/g, " ") + " GNF";

export const WHATSAPP_URL = "https://wa.me/224620343586";

export const whatsappProductUrl = (productName: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Bonjour Axiom Store, je souhaite commander : ${productName}.`,
  )}`;
