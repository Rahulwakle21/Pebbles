import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectAtGlance from "@/components/ProjectAtGlance";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import ConfigPricing from "@/components/ConfigPricing";
import PaymentPlans from "@/components/PaymentPlans";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import WhyPuneWest from "@/components/WhyPuneWest";
import WhyInvest from "@/components/WhyInvest";
import Developer from "@/components/Developer";
import ReraSection from "@/components/ReraSection";
import HowWeHelp from "@/components/HowWeHelp";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <ProjectAtGlance />
        <ProjectOverview />
        <Highlights />
        <ConfigPricing />
        <PaymentPlans />
        <FloorPlans />
        <Amenities />
        <Specifications />
        <Gallery />
        <Location />
        <WhyPuneWest />
        <WhyInvest />
        <Developer />
        <ReraSection />
        <HowWeHelp />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
