import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import Hero from "../components/home/Hero";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);

  return (
    <>
    <Hero />
    <div className="max-w-7xl mx-auto p-6">
      

      <h2 className="text-2xl font-semibold mb-6">
        Categories
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-3">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Home;