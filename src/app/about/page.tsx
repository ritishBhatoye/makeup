import Header from "@/components/Header";
import { AboutUs } from "@/components/about/aboutus";
import { Unique } from "@/components/about/unique";
import Numbers from "@/components/home/Numbers";
import { AboutReviews } from "@/components/about/aboutReviews";

export default function About() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className=" mx-auto py-8">
        <AboutUs />
        <Numbers/>
        <Unique />
        <AboutReviews />
      </main>
    </div>
  );
}
