import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sheena&apos;s Makeup</h1>
        <p className="text-lg">Discover the art of beauty with our expert services.</p>
      </main>
    </div>
  );
}