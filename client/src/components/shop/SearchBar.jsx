const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SearchBar;