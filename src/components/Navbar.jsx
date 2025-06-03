import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Contact", href: "/contact-us" },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchProducts] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropDownRef = useRef(null);

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (searchQuery.trim() === "") {
        setShowDropDown(false);
        setSearchProducts([]);
        return;
      }

      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      let filteredProducts = [];
      if (searchQuery) {
        setShowDropDown(true);
        filteredProducts = products.filter((product) =>
          Object.values(product).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      } else {
        setShowDropDown(false);
      }

      setSearchProducts(filteredProducts);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <>
      <nav className="bg-white text-primary-dark w-full fixed top-0 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <Link
            to="/"
            className="text-2xl bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-transparent bg-clip-text font-bold"
          >
            DealVana
          </Link>

          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-3xl text-primary-dark"
            >
              ☰
            </button>
          </div>

          <div className="hidden sm:flex items-center flex-1 justify-center">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              type="text"
              placeholder="Search products..."
              className="w-4/5 px-3 py-1 border-primary-dark ring-primary-dark ring focus:ring-2 outline-none rounded-md text-black"
            />
            {showDropDown && (
              <div
                ref={dropDownRef}
                className="absolute top-16 bg-white shadow-lg p-3 rounded-lg border border-gray-300 z-50"
              >
                <DropDown
                  products={searchedProducts}
                  handleDropDown={closeDropDown}
                />
              </div>
            )}
          </div>

          <div className="hidden sm:flex gap-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:bg-primary-light/10 py-1 px-3 rounded-xl font-semibold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 p-5 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold mb-4"
        >
          ✕
        </button>
        <div className="mb-4">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-1 border-primary-dark ring-primary-dark ring focus:ring-2 outline-none rounded-md text-black"
          />
          {showDropDown && (
            <div
              ref={dropDownRef}
              className="bg-white shadow-lg p-3 rounded-lg border border-gray-300 mt-2"
            >
              <DropDown
                products={searchedProducts}
                handleDropDown={closeDropDown}
              />
            </div>
          )}
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-primary-dark font-semibold hover:text-primary-light"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

function DropDown({ products, handleDropDown }) {
  if (products.length === 0) {
    return <p className="text-sm text-gray-500">No items found.</p>;
  }
  return (
    <article className="grid grid-cols-3 h-96 overflow-x-scroll hide-scrollbar w-full gap-2">
      {products.map((product, index) => {
        return (
          <Link
            onClick={handleDropDown}
            to={`/product/${encodeURIComponent(product.id)}`}
            key={index}
            className="border-gray-300 shadow-lg border rounded-xl p-2 min-h-40 w-32"
          >
            <div className="h-24 justify-items-center">
              <img
                src={product.image}
                className="h-full pb-2 object-center object-contain"
              />
            </div>
            <div className="p-1">
              <p className="text-xs-custom text-gray-600 mb-1">
                $ {product.price} /-
              </p>
              <h2 className="text-xs-custom text-black tracking-tight leading-tight capitalize">
                {product.title.length > 30
                  ? product.title.slice(0, 30) + "..."
                  : product.title}
              </h2>
            </div>
          </Link>
        );
      })}
    </article>
  );
}
