import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4">
          <a
            href="https://wa.me/56942139942"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-3 p-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            data-testid="link-whatsapp"
          >
            <span className="text-sm font-semibold">WhatsApp</span>
            <MessageCircle size={20} />
          </a>
          <a
            href="tel:+56226968905"
            className="group flex items-center justify-end gap-3 p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            data-testid="link-llamar"
          >
            <span className="text-sm font-semibold">Llamar</span>
            <Phone size={20} />
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50"
        data-testid="button-floating-cta"
      >
        <div className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
        <span className="relative text-xl font-bold">?</span>
      </button>
    </div>
  );
}
