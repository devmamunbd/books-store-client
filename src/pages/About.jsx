import React from "react";
import about from "../assets/aboutImage.webp";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full h-full object-cover lg:w-1/2">
            <img
              src={about}
              alt="About Book Store"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Our Book Store</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to <strong>Our Book Store</strong>, your one-stop
              destination for discovering a vast collection of books across
              various genres. Whether you are a passionate reader, student, or
              researcher, we offer an extensive selection of books to fuel your
              knowledge and imagination.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                📚 A diverse collection of books across all genres.
              </li>
              <li className="flex items-center text-gray-700">
                🚀 Fast and secure online ordering.
              </li>
              <li className="flex items-center text-gray-700">
                📦 Convenient home delivery options.
              </li>
              <li className="flex items-center text-gray-700">
                💬 Friendly customer support for all book lovers.
              </li>
            </ul>
            <button className="mt-6 cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Explore Books
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
