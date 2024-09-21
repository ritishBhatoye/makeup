'use client'
import Image from 'next/image';

export function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2">
        <Image
          src="/path/to/skincare-image.jpg"
          alt="Woman applying skincare product"
          width={600}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-gray-500">About Us</h2>
        <h1 className="text-4xl font-serif font-bold text-gray-800">
          Innovative Skincare Products Exporter
        </h1>
        <p className="text-gray-600">
          Ridiculus mus mauris vitae ultricies. Vulputate eu scelerisque felis imperdiet. Mauris sit amet massa
          vitae tortor quis vel. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as opposed to using
          'content here', making it look like readable English.
        </p>
        <ul className="grid grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <span className="text-primary">✦</span>
            <span>Vestibulum morbi blandit cursus risus.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✦</span>
            <span>Libero id faucibus nisl tincidunt eget.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✦</span>
            <span>Non consectetur a erat nam at lectus.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✦</span>
            <span>Auctor augue mauris augue neque.</span>
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded">VIEW MORE</button>
          <button className="border border-primary text-primary px-4 py-2 rounded flex items-center space-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>PLAY VIDEO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
