import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#f2ede8] text-[#6b5c4c] font-montserrat py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <Image 
               priority  
              src="/images/Logo.png" alt="MakeupArtistry_Kor Logo" width={100} height={100} />
              <span className="ml-2 font-bold text-xl">MakeupArtistry_Kor</span>
            </div>
            <p className="text-sm mb-6">Elevate your style with MakeupArtistry_Kor. Discover timeless elegance and modern fashion.</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {[
                { name: 'Facebook', src: '/images/social/facebook.png' },
                { name: 'Instagram', src: '/images/social/instagram.png' },
                { name: 'Twitter', src: '/images/social/twitterX.png' }
              ].map((social) => (
                <Link key={social.name} href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src={social.src}
                    alt={`${social.name} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>
          
          {[ 
            { title: 'Shop', items: ['New Arrivals', 'Bestsellers', 'Collections', 'Sale'] },
            { title: 'Help', items: ['FAQ', 'Shipping', 'Returns', 'Contact'] },
            { title: 'About', items: ['Our Story', 'Sustainability', 'Careers'] },
          ].map(({ title, items }) => (
            <div key={title} className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm hover:text-[#6b5c4c]/80 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#6b5c4c]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2024 MakeupArtistry_Kor. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:text-[#6b5c4c]/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#6b5c4c]/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
