import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919724400442";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20CB%20GLOBLE%20%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
}
