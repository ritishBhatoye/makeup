import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['No: 58 A, East Madison Street,', 'Baltimore, USA 4508']
  },
  {
    icon: Phone,
    title: 'Contact Us',
    lines: ['+000-123456789', '+000-485214789']
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@example.com', 'contact@example.com']
  }
];

export function Contact() {
  return (
    <div className="bg-[#f2ede8] text-[#6b5c4c] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 flex items-start space-x-4 shadow-sm">
              <div className="bg-[#6b5c4c] rounded-full p-2 sm:p-3">
                <info.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{info.title}</h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-xs sm:text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-xs uppercase text-[#6b5c4c] mb-2">CONTACT US</h2>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#6b5c4c] mb-4">Send Us Message</h1>
            <p className="text-sm mb-6 sm:mb-8">
              Nulla malesuada pellentesque venenatis. Donec et pellentesque risus. Sed porta auctor vestibulum pharetra.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c4c]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c4c]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email id"
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c4c]"
                />
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c4c]"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c4c]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#6b5c4c] text-white py-3 rounded-md hover:bg-[#5a4b3b] transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/contact-image.jpg"
              alt="Contact Us"
              width={500}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
