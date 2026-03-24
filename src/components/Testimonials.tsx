import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    role: "Software Engineer",
    text: "I suffered from severe lower back pain for months. Dr. Zafar’s diagnosis was spot on. Within 5 sessions, my pain reduced by 80%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aarti M.",
    role: "Teacher",
    text: "Excellent care post my knee surgery. Dr. Zafar is patient, motivating, and highly skilled. I am walking without support much earlier than expected.",
    rating: 5,
  },
  {
    name: "Vikram K.",
    role: "Athlete",
    text: "Recovered from a ligament tear in record time. The sports rehab program was intense but exactly what I needed to get back on the field.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-soft-gray overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
          Real Patients. Real Results.
        </h2>
        <p className="text-lg text-trust-blue/60 max-w-2xl mx-auto">
          Hear from those who have regained their mobility and returned to their daily lives pain-free.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
          >
            <Quote className="absolute top-6 right-8 text-soft-gray" size={48} />
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg text-trust-blue/80 mb-8 flex-grow italic leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center font-bold text-trust-blue">
                {testimonial.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-trust-blue">{testimonial.name}</h4>
                <p className="text-xs text-trust-blue/50 font-semibold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
