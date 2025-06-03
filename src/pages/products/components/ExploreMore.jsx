import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreMore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const uniqueCategoryMap = new Map();
      for (const product of data) {
        if (!uniqueCategoryMap.has(product.category)) {
          uniqueCategoryMap.set(product.category, product);
        }
      }
      setProducts([...uniqueCategoryMap.values()]);
    };
    fetchProducts();
  }, []);

  return (
    <section className="px-6 py-12 bg-white text-black">
      <h1 className="text-3xl font-semibold mb-4">Explore More</h1>
      <article className="flex flex-wrap gap-5">
        {products.map((product, index) => {
          return (
            <Link
              to={`/products/category/${product.category}`}
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
