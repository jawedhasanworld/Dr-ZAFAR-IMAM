import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft-gray section-padding min-h-[80vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-healing-green/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 bg-healing-green/20 text-healing-green-dark rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Expert Physiotherapy Care
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-trust-blue leading-[1.1] mb-6">
            Pain Relief Starts Here
          </h1>
          <p className="text-lg md:text-xl text-trust-blue/70 mb-10 max-w-xl leading-relaxed">
            Overcome back pain, recover from injuries, and regain your mobility with personalized, evidence-based treatment plans designed just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              Book Your Appointment Now
            </motion.a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-trust-blue font-bold hover:text-healing-green-dark transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-healing-green/10 transition-colors">
                <Phone size={18} />
              </div>
              <span>Call Us: +91-XXXXX-XXXXX</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/physio/800/1000"
              alt="Dr. Zafar Imam guiding a patient"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-healing-green flex items-center justify-center text-white">
                <span className="text-xs font-bold">10+</span>
              </div>
              <p className="text-xs font-bold text-trust-blue">Years of Experience</p>
            </div>
            <p className="text-[10px] text-trust-blue/60">Dedicated to your recovery and long-term wellness.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
