import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ClinicDetails() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-10">
            Visit Our Clinic
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center shrink-0 group-hover:bg-trust-blue group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-trust-blue mb-1">Address</h4>
                <p className="text-sm text-trust-blue/60 leading-relaxed">
                  [Insert Full Address, City, State, PIN]<br />
                  Near [Landmark], [City]
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center shrink-0 group-hover:bg-trust-blue group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-trust-blue mb-1">Phone</h4>
                <p className="text-sm text-trust-blue/60 leading-relaxed">
                  +91-XXXXX-XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center shrink-0 group-hover:bg-trust-blue group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-trust-blue mb-1">Email</h4>
                <p className="text-sm text-trust-blue/60 leading-relaxed">
                  [Insert Email]
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center shrink-0 group-hover:bg-trust-blue group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-trust-blue mb-1">Clinic Hours</h4>
                <p className="text-sm text-trust-blue/60 leading-relaxed">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed (or By Appointment)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative">
          {/* Placeholder for Google Map */}
          <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-center p-8">
            <MapPin size={48} className="text-trust-blue/20 mb-4" />
            <p className="text-trust-blue/40 font-bold uppercase tracking-widest text-xs">Interactive Google Map Embed</p>
            <p className="text-trust-blue/30 text-xs mt-2 max-w-[200px]">Your clinic location will be displayed here for easy navigation.</p>
          </div>
          {/* In a real app, you'd use an iframe here */}
          {/* <iframe src="..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
      </div>
    </section>
  );
}
