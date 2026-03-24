import { motion } from "motion/react";
import { MessageCircle, Send, Calendar, User, Phone, ClipboardList } from "lucide-react";

export default function BookingForm() {
  return (
    <section id="booking" className="section-padding bg-healing-green/10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
          Take the First Step Towards a Pain-Free Life
        </h2>
        <p className="text-lg text-trust-blue/60">
          Fill out the form below or message us on WhatsApp to schedule your consultation.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-healing-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-trust-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-2">
            <label className="text-sm font-bold text-trust-blue flex items-center gap-2">
              <User size={16} className="text-healing-green-dark" /> Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-6 py-4 bg-soft-gray rounded-2xl border-none focus:ring-2 focus:ring-healing-green transition-all outline-none text-trust-blue"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-trust-blue flex items-center gap-2">
              <Phone size={16} className="text-healing-green-dark" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91-XXXXX-XXXXX"
              className="w-full px-6 py-4 bg-soft-gray rounded-2xl border-none focus:ring-2 focus:ring-healing-green transition-all outline-none text-trust-blue"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-trust-blue flex items-center gap-2">
              <ClipboardList size={16} className="text-healing-green-dark" /> What are you seeking help for?
            </label>
            <select className="w-full px-6 py-4 bg-soft-gray rounded-2xl border-none focus:ring-2 focus:ring-healing-green transition-all outline-none text-trust-blue appearance-none">
              <option>Back Pain</option>
              <option>Neck Pain</option>
              <option>Sports Injury</option>
              <option>Post-Surgery Rehab</option>
              <option>Joint Pain / Arthritis</option>
              <option>Posture Correction</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-trust-blue flex items-center gap-2">
              <Calendar size={16} className="text-healing-green-dark" /> Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-6 py-4 bg-soft-gray rounded-2xl border-none focus:ring-2 focus:ring-healing-green transition-all outline-none text-trust-blue"
            />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10"
            >
              <Send size={20} />
              Book Your Session
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919876543210"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
