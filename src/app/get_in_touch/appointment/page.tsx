import Header from "@/components/Header";
import Appointment from '@/components/get_in_touch/Appointment';
import Footer from "@/components/Footer";

export default function AppointmentPage() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main>
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}