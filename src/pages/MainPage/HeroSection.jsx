import { useState } from "react";
import backgroundImage from "../../assets/8 final.jpg";

export default function HeroSection() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Adjusted opacity to 70% */}

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-white px-4 lg:px-0 flex flex-col items-center" style={{ marginTop: '20vh', marginBottom: '10vh' }}>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-md leading-tight">
        <span className="text-yellow-500">Golden</span> Development
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-10 leading-relaxed max-w-lg mx-auto drop-shadow-md">
          Creating Spaces that Inspire and Elevate Your Lifestyle.
        </p>

        {/* Button */}
        <a
          href="#contact"
          onClick={handleClick}
          className="inline-block bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1 cursor-pointer"
        >
          Learn More 
        </a>

        {/* Info Section */}
        {showInfo && (
          <div className="mt-4 text-lg max-w-lg mx-auto drop-shadow-md">
            <p className="font-medium leading-relaxed">
              We are a company specialized in designing modern buildings and architectural spaces, striving to create inspiring environments that enhance your lifestyle. Our team of skilled designers and specialized engineers is committed to delivering the best design solutions that meet your needs and exceed your expectations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
