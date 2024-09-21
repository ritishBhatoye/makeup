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
    <div className="bg-[#f8f5f2] text-[#4a4a4a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-[#f2ede8] rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-[#8b7b6b] rounded-full p-3">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-xs uppercase text-[#8b7b6b] mb-2">CONTACT US</h2>
            <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">Send Us Message</h1>
            <p className="text-sm mb-8">
              Nulla malesuada pellentesque venenatis. Donec et pellentesque risus. Sed porta auctor vestibulum pharetra.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 bg-[#f2ede8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b7b6b]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 bg-[#f2ede8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b7b6b]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email id"
                  className="w-full p-3 bg-[#f2ede8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b7b6b]"
                />
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full p-3 bg-[#f2ede8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b7b6b]"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-[#f2ede8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b7b6b]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#8b7b6b] text-white py-3 rounded-md hover:bg-[#7a6a5a] transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/contact-image.jpg"
              alt="Contact Us"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
