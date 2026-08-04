import ProductCard from "../common/ProductCard";
import EmptyState from "./EmptyState";

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;