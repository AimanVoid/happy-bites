import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

  <div className="relative">

    <img
      src={product.images?.[0]}
      alt={product.name}
      className="w-full h-56 object-cover"
    />

    {product.isFeatured && (
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
        Featured
      </span>
    )}

    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition">
      <FiHeart />
    </button>

  </div>

  <div className="p-5">

    <p className="text-orange-500 text-sm font-semibold">
      {product.category?.name}
    </p>

    <h3 className="text-xl font-bold mt-2">
      {product.name}
    </h3>

    <p className="text-gray-500 mt-2 text-sm">
      {product.description}
    </p>

    <div className="flex items-center mt-3">

      <FaStar className="text-yellow-400" />

      <span className="ml-2 text-gray-600">
        {product.rating}
      </span>

    </div>

    <div className="flex justify-between items-center mt-5">

      <span className="text-2xl font-bold text-orange-500">
        Rs. {product.price}
      </span>

      <Link
        to={`/products/${product._id}`}
        className="text-orange-500 font-semibold hover:underline"
      >
        Details →
      </Link>

    </div>

    <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition">

      <FiShoppingCart />

      Add to Cart

    </button>

  </div>

</div>
  );
};

export default ProductCard;