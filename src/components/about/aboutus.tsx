'use client'
import Image from 'next/image';

export function AboutUs() {
  return (
    <section className="py-16 bg-[#f2ede8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/image_7.jpg"
              alt="Woman applying skincare product"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-sm uppercase tracking-wide text-[#6b5c4c]">About Us</h2>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b5c4c]">
              Innovative Skincare Products Exporter
            </h1>
            <p className="text-[#6b5c4c]">
              Ridiculus mus mauris vitae ultricies. Vulputate eu scelerisque felis imperdiet. Mauris sit amet massa
              vitae tortor quis vel. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to using
              'content here', making it look like readable English.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Vestibulum morbi blandit cursus risus.', 'Libero id faucibus nisl tincidunt eget.', 'Non consectetur a erat nam at lectus.', 'Auctor augue mauris augue neque.'].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-[#6b5c4c]">✦</span>
                  <span className="text-[#6b5c4c]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#6b5c4c] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
                VIEW MORE
              </button>
              <button className="border border-[#6b5c4c] text-[#6b5c4c] px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#6b5c4c] hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>PLAY VIDEO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
