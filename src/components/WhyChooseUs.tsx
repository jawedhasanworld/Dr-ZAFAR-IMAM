import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "1-on-1 Personalized Care",
    desc: "No rushed sessions; you get our full, undivided attention.",
  },
  {
    title: "Evidence-Based Treatments",
    desc: "We use globally recognized techniques for proven results.",
  },
  {
    title: "Modern Equipment",
    desc: "Advanced modalities for faster pain relief and tissue healing.",
  },
  {
    title: "Transparent & Affordable",
    desc: "High-quality care without hidden costs.",
  },
  {
    title: "Warm, Friendly Environment",
    desc: "A welcoming space designed to make you feel relaxed and safe.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-10">
            Why Patients Trust Our Clinic
          </h2>
          <div className="space-y-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-healing-green/20 flex items-center justify-center shrink-0 group-hover:bg-healing-green transition-colors">
                  <CheckCircle2 className="text-healing-green-dark group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trust-blue mb-2">{reason.title}</h3>
                  <p className="text-sm text-trust-blue/60 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/clinic/800/1000"
              alt="Physiotherapy clinic equipment"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-healing-green/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
