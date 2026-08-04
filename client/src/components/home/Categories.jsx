import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

const Categories = () => {
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
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
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

              <h3 className="text-lg font-semibold mt-3 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;