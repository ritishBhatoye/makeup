import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import HairImage from "../../../public/images/hairs.jpg"
import SkinImage from "../../../public/images/skincare.jpg"
import MakeupImage from "../../../public/images/Makeup1.jpg"

export default function Blog() {
  const blogPosts = [
    {
      id: "1",
      category: "Skincare",
      title: "Best Skincare Products for Glowing Skin: Top 5 Must-Try Items",
      excerpt: "Discover the top 5 skincare products for achieving radiant, healthy skin. Our expert-recommended routine includes gentle exfoliators and hydrating serums suitable for all skin types.",
      image: SkinImage,
    },
    {
      id: "2",
      category: "Makeup",
      title: "2023 Summer Makeup Trends: Long-Lasting Looks for Hot Weather",
      excerpt: "Learn about the latest summer makeup trends for 2023. Our guide features heat-resistant, sweat-proof makeup techniques to maintain a fresh, sun-kissed look all day long.",
      image: HairImage,
    },
    {
      id: "3",
      category: "Hair Care",
      title: "Effective Hair Treatments: Repairing and Nourishing Damaged Hair",
      excerpt: "Explore the most effective hair treatments for damaged hair. Our comprehensive review covers nourishing hair masks and professional-grade products for restoring hair health.",
      image: MakeupImage,
    }
  ];

  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">Blog</h1>
        <p className="text-lg mb-8 text-secondary">Stay updated with our latest beauty tips and trends.</p>

        {blogPosts.map((post) => (
          <section key={post.id} className="bg-white mb-12 shadow-md rounded-lg overflow-hidden">
            <div className="container px-6 py-8 mx-auto">
              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <Image 
                  className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" 
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={475}
                />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                  <p className="text-sm text-accent uppercase font-semibold">{post.category}</p>

                  <Link href={`/blog/${post.id}`} className="block mt-4 text-2xl font-semibold text-primary hover:text-accent transition-colors">
                    {post.title}
                  </Link>

                  <p className="mt-3 text-sm text-secondary md:text-sm">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.id}`} className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-semibold transition-colors">
                    Read more
                  </Link>       
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
