import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductCard from "../common/ProductCard";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBestSellers = async () => {
    try {
      const response = await getProducts({ bestSeller: true });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching best sellers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBestSellers();
    
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Best Sellers
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center">No best sellers found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BestSellers;