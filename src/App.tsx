/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import ClinicDetails from "./components/ClinicDetails";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <BookingForm />
        <ClinicDetails />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
