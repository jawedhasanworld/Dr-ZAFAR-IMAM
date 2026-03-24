import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-healing-green text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-healing-green-dark transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-healing-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-healing-green-dark"></span>
      </span>
    </motion.a>
  );
}
