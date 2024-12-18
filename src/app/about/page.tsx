import Header from "@/components/Header";
import { AboutUs } from "@/components/about/aboutus";
import { Unique } from "@/components/about/unique";
import Numbers from "@/components/home/Numbers";
import { AboutReviews } from "@/components/about/aboutReviews";
import {  IntroductionSection } from "@/components/about/IntroductionSection";
import Footer from "@/components/Footer";
import { AboutMeSection } from "@/components/about/aboutMe";

export default function About() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className=" mx-auto py-8">
      <IntroductionSection />
      <AboutMeSection />

        <AboutUs />

        <Numbers/>
        <Unique />
        <AboutReviews />
      
      </main>
      <Footer />
    </div>
  );
}
