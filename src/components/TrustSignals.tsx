import { Star, Users, Award, GraduationCap } from "lucide-react";

const signals = [
  {
    icon: <Star className="text-yellow-400" fill="currentColor" />,
    value: "4.9/5",
    label: "Average Rating",
    sub: "Google & Practo",
  },
  {
    icon: <Users className="text-healing-green-dark" />,
    value: "1,000+",
    label: "Happy Patients",
    sub: "Recovered Successfully",
  },
  {
    icon: <GraduationCap className="text-trust-blue" />,
    value: "10+ Years",
    label: "Clinical Experience",
    sub: "Expert Care",
  },
  {
    icon: <Award className="text-healing-green-dark" />,
    value: "Certified",
    label: "Evidence-Based",
    sub: "Scientific Practice",
  },
];

export default function TrustSignals() {
  return (
    <div className="bg-white border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {signals.map((signal, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-xl bg-soft-gray flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {signal.icon}
            </div>
            <h3 className="text-2xl font-bold text-trust-blue mb-1">{signal.value}</h3>
            <p className="text-sm font-semibold text-trust-blue/80">{signal.label}</p>
            <p className="text-[10px] uppercase tracking-wider text-trust-blue/40 font-bold">{signal.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
