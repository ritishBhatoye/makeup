import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import OurSecret from "@/components/home/OurSecret";
import Numbers from "@/components/home/Numbers";
import Faq from "@/components/home/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main>
        <HeroSection />
        <OurSecret />
        <Numbers />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}