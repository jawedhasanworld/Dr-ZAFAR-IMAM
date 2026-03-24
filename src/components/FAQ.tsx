import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions depends on your specific condition and how your body responds to treatment. After your initial assessment, Dr. Zafar will provide a clear, personalized treatment timeline.",
  },
  {
    question: "Do you provide home visits?",
    answer: "Yes, we offer home physiotherapy services for elderly patients or those unable to travel post-surgery within [City/Radius].",
  },
  {
    question: "Is physiotherapy painful?",
    answer: "Physiotherapy is meant to relieve pain, not cause it. You may feel mild soreness after certain stretches or exercises, but treatments are always adjusted to your comfort level.",
  },
  {
    question: "What should I wear to my appointment?",
    answer: "We recommend wearing loose, comfortable clothing that allows easy movement of the area being treated. For example, shorts for knee issues or a tank top for shoulder problems.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-soft-gray">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
          Got Questions? We Have Answers.
        </h2>
        <p className="text-lg text-trust-blue/60">
          Everything you need to know about starting your journey to recovery.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="text-healing-green-dark" size={20} />
                <span className="font-bold text-trust-blue">{faq.question}</span>
              </div>
              <motion.div
                animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-trust-blue/40" size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 text-sm text-trust-blue/60 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
