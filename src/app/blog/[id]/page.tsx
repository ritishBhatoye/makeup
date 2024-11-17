import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import HairImage from "../../../../public/images/hairs.jpg"
import SkinImage from "../../../../public/images/skincare.jpg"
import MakeupImage from "../../../../public/images/Makeup1.jpg"
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { blogPosts } from "@/utils/blogData";


for (let i = 4; i <= 1000; i++) {
  const categories = ['Skincare', 'Makeup', 'Hair Care', 'Nail Care', 'Body Care', 'Fragrance', 'Men\'s Grooming', 'Natural Beauty', 'Anti-Aging', 'Sun Care'];
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  const titles = [
    `${i} Essential ${category} Tips for a Flawless Look`,
    `The Ultimate Guide to ${category}: ${i} Products You Need to Try`,
    `${category} 101: ${i} Secrets the Experts Don't Tell You`,
    `Revolutionize Your ${category} Routine with These ${i} Hacks`,
    `${i} Ways to Elevate Your ${category} Game This Season`
  ];
  const title = titles[Math.floor(Math.random() * titles.length)];
  
  const excerpts = [
    `Discover the latest trends and expert advice in ${category.toLowerCase()}. We've compiled ${i} game-changing tips to help you achieve your best look yet.`,
    `Transform your ${category.toLowerCase()} routine with our comprehensive guide. Learn about ${i} must-have products that will revolutionize your beauty regimen.`,
    `Uncover the hidden secrets of ${category.toLowerCase()} with our in-depth analysis. We reveal ${i} insider tips that will change the way you approach beauty.`,
    `Elevate your ${category.toLowerCase()} game with these ${i} innovative hacks. Say goodbye to common beauty woes and hello to a flawless appearance.`,
    `Stay ahead of the curve with our curated list of ${i} ${category.toLowerCase()} trends. Learn how to incorporate these looks into your daily routine for maximum impact.`
  ];
  const excerpt = excerpts[Math.floor(Math.random() * excerpts.length)];
  
  const images = [SkinImage, MakeupImage, HairImage];
  const image = images[Math.floor(Math.random() * images.length)];
  
  const content = `
    <h2>Introduction to ${category}</h2>
    <p>${category} is an essential aspect of personal care and self-expression. In this comprehensive guide, we'll explore ${i} key elements that can help you master your ${category.toLowerCase()} routine and achieve stunning results.</p>

    <h2>Understanding Your ${category} Needs</h2>
    <p>Before diving into specific products and techniques, it's crucial to understand your unique ${category.toLowerCase()} needs. Factors such as skin type, hair texture, or personal style preferences all play a role in determining the best approach for you.</p>

    <h2>Essential ${category} Products</h2>
    <p>We've curated a list of must-have ${category.toLowerCase()} products that cater to a variety of needs and preferences. From cult favorites to innovative newcomers, these products are sure to elevate your beauty routine.</p>

    <h2>${category} Techniques and Tips</h2>
    <p>Master the art of ${category.toLowerCase()} with our expert-approved techniques and tips. Whether you're a beginner or a seasoned pro, these insights will help you achieve professional-level results at home.</p>

    <h2>Addressing Common ${category} Concerns</h2>
    <p>We tackle the most prevalent ${category.toLowerCase()} issues and provide effective solutions. Learn how to overcome challenges and achieve your desired results with our targeted advice.</p>

    <h2>Sustainable and Ethical ${category}</h2>
    <p>Discover eco-friendly and cruelty-free options in the world of ${category.toLowerCase()}. We highlight brands and products that prioritize sustainability without compromising on quality.</p>

    <h2>Seasonal ${category} Adjustments</h2>
    <p>Learn how to adapt your ${category.toLowerCase()} routine to changing seasons and environmental factors. Our guide ensures you maintain optimal results year-round.</p>

    <h2>Budget-Friendly ${category} Options</h2>
    <p>Achieve great results without breaking the bank. We showcase affordable ${category.toLowerCase()} products and techniques that deliver impressive outcomes.</p>

    <h2>Advanced ${category} Treatments</h2>
    <p>For those looking to take their ${category.toLowerCase()} game to the next level, we explore professional treatments and advanced at-home options that can transform your appearance.</p>

    <h2>The Future of ${category}</h2>
    <p>Stay ahead of the curve with our insights into emerging ${category.toLowerCase()} trends and innovations. Discover what the future holds for this ever-evolving industry.</p>

    <p>By incorporating these ${i} essential elements into your ${category.toLowerCase()} routine, you'll be well on your way to achieving your beauty goals. Remember, consistency is key, and don't be afraid to experiment to find what works best for you. Happy beautifying!</p>
  `;
  
  blogPosts.push({
    id: i.toString(),
    category,
    title,
    excerpt,
    image:image.toString(),
    content
  });
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-96">
            <Image 
              className="object-cover object-center"
              src={post.image}
              alt={post.title}
              layout="fill"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2">{post.category}</p>
              <h1 className="text-4xl font-bold leading-tight mb-2">{post.title}</h1>
              <p className="text-lg font-medium opacity-90">{post.excerpt}</p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                {/* <Image
                  src="/images/author-avatar.jpg"
                  alt="Author"
                  width={48}
                  height={48}
                  className="rounded-full"
                /> */}
                {/* <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-gray-500">Posted on May 15, 2023</p>
                </div> */}
              </div>
              <div className="flex space-x-4">
                <FaFacebookF className="text-blue-600 hover:text-blue-700 cursor-pointer" />
                <FaTwitter className="text-sky-500 hover:text-sky-600 cursor-pointer" />
                <FaPinterestP className="text-red-600 hover:text-red-700 cursor-pointer" />
              </div>
            </div>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-2 gap-8">
            {blogPosts.filter(relatedPost => relatedPost.id !== post.id).slice(0, 2).map(relatedPost => (
              <div key={relatedPost.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-accent uppercase mb-2">{relatedPost.category}</p>
                  <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600">{relatedPost.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  );
}