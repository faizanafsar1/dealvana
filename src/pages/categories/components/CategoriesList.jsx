import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filteredProducts = new Map();
      for (const product of data) {
        if (!filteredProducts.has(product.category)) {
          filteredProducts.set(product.category, product);
        }
      }
      console.log(data);
      setProducts([...filteredProducts.values()]);
    };
    handleFetch();
  }, []);

  useEffect(() => {
    console.log("products:", products);
  }, [products]);
  return (
    <section className="min-h-screen px-6 py-12 bg-white text-black">
      <h1 className="text-3xl font-semibold mb-4">Categories</h1>
      <article className="flex flex-wrap gap-5">
        {products.map((product, index) => {
          return (
            <Link
              to={`/products/category/${encodeURI(product.category)}`}
              key={index}
              className="border-gray-300 border rounded-xl p-2 overflow-hidden size-44"
            >
              <h2 className="text-base capitalize text-center text-nowrap font-semibold">
                {product.category}
              </h2>
              <div className="h-full py-5 justify-items-center">
                <img
                  src={product.image}
                  key={index}
                  className=" h-full p-2 object-center  object-contain"
                />
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
}
