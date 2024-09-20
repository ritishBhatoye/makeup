import Header from "@/components/Header";

export default function Shop() {
  return (
    <div className="bg-white text-black min-h-screen font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <p className="text-lg">Explore our collection of premium beauty products.</p>
      </main>
    </div>
  );
}
