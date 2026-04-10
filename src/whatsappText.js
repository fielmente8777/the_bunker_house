export const whatsappText = (text) => {
  const url = `https://api.whatsapp.com/send?phone=919045951195&text=${encodeURI(
    text
  )}`;
  window.open(url, "_blank");
};
