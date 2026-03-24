import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "BPT / MPT (Insert Degrees)"
  "Specialist in Orthopedic & Sports Rehabilitation",
  "Certified Manual Therapist",
  "Advanced Dry Needling Expert",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/doctor/800/1000"
              alt="Dr. Zafar Imam in clinic"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-healing-green/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-trust-blue/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-8 leading-tight">
            Meet Dr. Zafar Imam – Your Partner in Recovery
          </h2>
          <p className="text-lg text-trust-blue/70 mb-8 leading-relaxed italic">
            "Living with pain doesn't have to be your normal. As a dedicated physiotherapist, I believe in treating the root cause of your discomfort, not just the symptoms. Whether you are an office worker struggling with neck pain, an athlete bouncing back from an injury, or an elder looking to improve mobility, my approach is simple: personalized care, human touch, and proven scientific methods."
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-healing-green-dark shrink-0 mt-1" size={20} />
                <span className="text-sm font-semibold text-trust-blue/80">{cred}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Read Full Bio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
