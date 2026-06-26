import { CONFIG } from '../config';

export function useWhatsApp() {
  const getWhatsAppLink = (text) => {
    const cleanPhone = CONFIG.phonePrimary.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  };

  const getProductInquiryLink = (productName, type) => {
    const message = `Hi Mahesh Masala, I am interested in inquiring about bulk pricing for your "${productName}" (${type}). Please share pricing tiers and shipping timelines to my location.`;
    return getWhatsAppLink(message);
  };

  const getGeneralInquiryLink = () => {
    const message = `Hi Mahesh Masala, I would like to inquire about your product range and bulk pricing options. Please share your catalogue and price sheet.`;
    return getWhatsAppLink(message);
  };

  return {
    getWhatsAppLink,
    getProductInquiryLink,
    getGeneralInquiryLink
  };
}
