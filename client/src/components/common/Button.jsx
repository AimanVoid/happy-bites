function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;