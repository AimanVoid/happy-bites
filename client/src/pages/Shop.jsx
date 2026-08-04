import { useEffect, useState } from "react";

import { getProducts } from "../services/productService";

import ProductGrid from "../components/shop/ProductGrid";

import SearchBar from "../components/shop/SearchBar";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await getProducts({ search });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchProducts();
  
}, [search]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Shop
      </h1>

      <SearchBar
  search={search}
  setSearch={setSearch}
/>

      <ProductGrid
        products={products}
        loading={loading}
      />

    </div>
  );
};

export default Shop;