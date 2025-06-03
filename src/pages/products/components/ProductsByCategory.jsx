import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductsByCategory() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filteredProducts = data.filter(
        (product) => product.category === category
      );

      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [category]);

  return (
    <section className="px-6 py-12 bg-white text-black">
      <h1 className="text-3xl font-semibold mb-4 capitalize">{category}</h1>
      <article className="flex flex-wrap gap-5">
        {products.map((product, index) => {
          return (
            <Link
              to={`/product/${encodeURIComponent(product.id)}`}
              key={index}
              className="border-gray-300 shadow-lg border rounded-xl p-2 min-h-60 w-48"
            >
              <div className=" h-40 justify-items-center">
                <img
                  src={product.image}
                  key={index}
                  className=" h-full  p-2 object-center  object-contain"
                />
              </div>
              <div className="px-2">
                <p className="text-xs text-primary-dark mb-1">
                  ${product.price}/-
                </p>
                <h2 className="text-xs tracking-tight leading-tight capitalize">
                  {product.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
}
