import Header from "@/components/Header";

export default function GetInTouch() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg">Contact us for any inquiries or appointments.</p>
      </main>
    </div>
  );
}
