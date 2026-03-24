import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-trust-blue text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-trust-blue font-bold text-xl">ZI</span>
            </div>
            <h2 className="text-xl font-bold leading-tight">Dr. Zafar Imam</h2>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-8">
            Expert Physiotherapy in [City]. Dedicated to helping you overcome pain and regain your mobility through personalized, evidence-based care.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-healing-green transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            {["Home", "About Us", "Services", "Testimonials", "FAQ", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a href={link === "Home" ? "#" : `#${link.toLowerCase().replace(" ", "")}`} className="hover:text-healing-green transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-8">Contact Us</h4>
          <ul className="space-y-6 text-sm text-white/60">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-healing-green shrink-0" />
              <span>[Insert Full Address, City, State, PIN]</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-healing-green shrink-0" />
              <span>+91-XXXXX-XXXXX</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={18} className="text-healing-green shrink-0" />
              <span>[Insert Email]</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="text-lg font-bold mb-8">Newsletter</h4>
          <p className="text-sm text-white/60 mb-6">Subscribe to get health tips and clinic updates.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-healing-green outline-none w-full"
            />
            <button className="bg-healing-green text-trust-blue p-3 rounded-xl hover:bg-healing-green-dark transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-white/40">
          © 2026 Dr. Zafar Imam Physiotherapy Clinic. All rights reserved.
        </p>
        <div className="text-[10px] text-white/20 max-w-md text-center md:text-right">
          Dr. Zafar Imam provides the best physiotherapy clinic services in [City] specializing in back pain treatment, sports injuries, and post-surgery rehab.
        </div>
      </div>
    </footer>
  );
}
