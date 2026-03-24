import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">ZI</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight text-trust-blue">Dr. ZAFAR IMAM</h1>
            <p className="text-[10px] uppercase tracking-widest font-semibold text-healing-green-dark">Experienced Pt Doctor</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Services", "Testimonials", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-trust-blue/70 hover:text-trust-blue transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:+916200260997" className="hidden lg:flex items-center gap-2 text-trust-blue font-semibold hover:text-healing-green-dark transition-colors">
            <Phone size={18} />
            <span>+91-*****-****-*****</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Book Appointment
          </motion.a>
        </div>
      </div>
    </header>
  );
}
