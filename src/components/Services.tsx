import { motion } from "motion/react";
import { Activity, Dumbbell, HeartPulse, Accessibility, Move, Home } from "lucide-react";

const services = [
  {
    icon: <Activity className="text-trust-blue" />,
    title: "Back & Neck Pain Therapy",
    desc: "Targeted relief for sciatica, cervical spondylosis, and postural strains. Ideal for desk workers.",
    color: "bg-blue-50",
  },
  {
    icon: <Dumbbell className="text-healing-green-dark" />,
    title: "Sports Injury Rehab",
    desc: "Get back in the game faster. Sprain, strain, and ligament tear recovery.",
    color: "bg-green-50",
  },
  {
    icon: <HeartPulse className="text-red-500" />,
    title: "Post-Surgery Rehabilitation",
    desc: "Safe, guided exercises to restore strength and range of motion after orthopedic surgeries.",
    color: "bg-red-50",
  },
  {
    icon: <Accessibility className="text-orange-500" />,
    title: "Joint Pain & Arthritis Management",
    desc: "Gentle, effective therapies to reduce knee, shoulder, and hip stiffness for the elderly.",
    color: "bg-orange-50",
  },
  {
    icon: <Move className="text-purple-500" />,
    title: "Posture Correction",
    desc: "Ergonomic guidance and strengthening to reverse the effects of a sedentary lifestyle.",
    color: "bg-purple-50",
  },
  {
    icon: <Home className="text-healing-green-dark" />,
    title: "Home Physiotherapy",
    desc: "Expert care delivered to your doorstep for patients with severe mobility restrictions.",
    color: "bg-emerald-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-soft-gray">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
          Specialized Treatments for Faster Healing
        </h2>
        <p className="text-lg text-trust-blue/60 max-w-2xl mx-auto">
          We provide comprehensive care tailored to your unique condition and lifestyle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-trust-blue mb-4">{service.title}</h3>
            <p className="text-sm text-trust-blue/60 mb-6 leading-relaxed">{service.desc}</p>
            <a href="#booking" className="text-sm font-bold text-healing-green-dark hover:text-trust-blue transition-colors flex items-center gap-2">
              Learn More <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          View All Treatments
        </motion.button>
      </div>
    </section>
  );
}
