import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
    
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        Categories
      </h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full md:w-72 border rounded-lg px-4 py-3"
      >
        <option value="">All Categories</option>

        {categories.map((category) => (
          <option
            key={category._id}
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;