import Header from "@/components/Header";

export default function Blog() {
  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg">Stay updated with our latest beauty tips and trends.</p>
      </main>
    </div>
  );
}
