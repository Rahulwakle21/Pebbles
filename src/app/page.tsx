import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyPuneWest from "@/components/WhyPuneWest";
import HowWeHelp from "@/components/HowWeHelp";
import ParkPebblesHero from "@/components/ParkPebblesHero";
import ProjectOverview from "@/components/ProjectOverview";
import ConfigPricing from "@/components/ConfigPricing";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import WhyInvest from "@/components/WhyInvest";
import Developer from "@/components/Developer";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyPuneWest />
        <HowWeHelp />
        <ParkPebblesHero />
        <ProjectOverview />
        <ConfigPricing />
        <Amenities />
        <FloorPlans />
        <Location />
        <Gallery />
        <WhyInvest />
        <Developer />
        <FAQ />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
