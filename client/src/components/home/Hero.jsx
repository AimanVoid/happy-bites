import { Link } from "react-router-dom";

const Hero = () => {

  return (
    
    <section className="bg-orange-50">
        
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* Left */}

        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Welcome to Happy Bites
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Delicious Food &
            <span className="text-orange-500"> Happy Pets</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Discover fresh meals, tasty snacks, and premium pet food
            all in one place. Order quickly through WhatsApp with
            Cash on Delivery.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/shop"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="Happy Bites"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;