import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-orange-500"
        >
          Happy Bites
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500 transition"
  }
>
  Home
</NavLink>
          </li>

          <li>
            <NavLink
  to="/shop"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500 transition"
  }
>
  Shop
</NavLink>
          </li>

          <li>
            <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500 transition"
  }
>
  About
</NavLink>
          </li>

          <li>
            <NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500 transition"
  }
>
  Contact
</NavLink>
          </li>

        </ul>

        {/* Right Icons */}

        <div className="flex items-center gap-5 text-xl">

          <Link to="/wishlist">
            <FaHeart />
          </Link>

          <Link to="/cart">
            <FaShoppingCart />
          </Link>

          <Link to="/login">
            <FaUser />
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;