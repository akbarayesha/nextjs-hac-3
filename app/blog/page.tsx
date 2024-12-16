import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[50vh] bg-cover bg-center bg-[url('/pic13.jpg')]">
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Blog Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Blog</h1>
          <p className="text-lg sm:text-xl mt-4">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Blog Posts (65% width on large screens) */}
            <div className="lg:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/blog-1.jpg"
                  alt="Going On"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">
                  Going all-in with millennial design
                </h1>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/blog-2.jpg"
                  alt="Going On Again"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">
                  Exploring new ways of decorating
                </h1>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/blog-3.jpg"
                  alt="Third Post"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">
                  Hand-made pieces that took time to make
                </h1>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Recent Posts Section (35% width on large screens) */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Recent Posts</h1>

              {/* Recent Post Items */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={`/blog-${index + 4}.jpg`}
                    alt={`Recent Post ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-24 h-24"
                  />
                  <div>
                    <h2 className="text-sm md:text-base font-bold">
                      {`Post Title ${index + 1}`}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="bg-[#FAF4F4] text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Concept Items */}
            {[
              { title: 'Free Delivery', text: 'For all orders over $50, consectetur adipiscing elit.' },
              { title: '90 Days Return', text: 'If the product has an issue, consectetur adipiscing elit.' },
              { title: 'Secure Payments', text: '100% secure payments, consectetur adipiscing elit.' },
            ].map((concept, index) => (
              <div key={index} className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">{concept.title}</h2>
                <p className="text-gray-700 text-sm md:text-base mt-2">{concept.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
