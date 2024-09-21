import Header from "@/components/Header";
import { Contact } from '@/components/get_in_touch/Contact';
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}