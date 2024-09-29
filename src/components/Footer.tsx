import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#f2ede8] text-[#6b5c4c] font-montserrat py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/path-to-logo.svg" alt="Sheena Logo" width={24} height={24} />
              <span className="ml-2 font-semibold">Sheena</span>
            </div>
            <p className="text-sm mb-4">Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Amet commodo nulla acilisi nullam</p>
            <div className="flex space-x-4 text-sm">
              <Link href="#" className="hover:text-[#6b5c4c]/80">Fb.</Link>
              <Link href="#" className="hover:text-[#6b5c4c]/80">Be.</Link>
              <Link href="#" className="hover:text-[#6b5c4c]/80">Tw.</Link>
              <Link href="#" className="hover:text-[#6b5c4c]/80">In.</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 uppercase">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {['Orders', 'Returns', 'Gift Cards', 'Shipping', 'International Shipping', 'Size Guide', 'Measuring Guide', 'Design Services'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-[#6b5c4c]/80">{item}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 uppercase">Visit Us</h3>
            <ul className="space-y-2 text-sm">
              {['Stores', 'Events'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-[#6b5c4c]/80">{item}</Link></li>
              ))}
            </ul>
            
            <h3 className="font-semibold mt-8 mb-4 uppercase">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Rewards Program', 'Trade Program', 'Sustainability', 'Diversity', 'Accessibility', 'Careers', 'Terms & Conditions', 'Privacy & Policy'].map((item) => (
                <li key={item}><Link href="#" className="hover:text-[#6b5c4c]/80">{item}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 uppercase">Main Office</h3>
            <p className="text-sm mb-2">Phone No : +123 456 78910</p>
            <p className="text-sm mb-4">Have a question about Cosmetics?</p>
            <p className="text-sm mb-4">Email : info@example.com</p>
            <p className="text-sm">Mon - Sat ..... 8am - 4pm</p>
            <p className="text-sm">Sat & Sun ..... Closed</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#6b5c4c]/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">Copyright © 2024 . All Rights Reserved.</p>
          <Image src="/path-to-bottle-icon.svg" alt="Bottle Icon" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
