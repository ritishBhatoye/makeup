import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceMainPage from "@/components/services/serviceMainPage";
import ServiceWelcome from "@/components/services/serviceWelcome";

export default function Services() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className="mx-auto px-4 py-8">
        <ServiceWelcome />
        <ServiceMainPage />
      </main>
      <Footer />
    </div>
  );
}
