import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";

const HeroSection = () => {
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
    <section className="bg-gradient-to-br from-white via-primary-light/10 to-white justify-center text-black min-h-[90vh] *:h-fit pb-10  pt-20 flex  px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-normal">
            Discover <br /> Top Deals <br />
            From Trusted Stores
          </h1>
          <p className="text-gray-500 mt-4 leading-normal">
            Browse Products From Leading Retailers. Click To View More And
            Purchase Directly From The Official Website.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#trendingDeals">
              <Button style={"primary"} label={"Explore Now"} />
            </a>
            <Link to={"/categories"}>
              <Button style={"secondary"} label={"View Categories"} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 *:p-2">
          <div className="rounded-lg border-2 bg-white shadow-lg border-gray-300 w-full h-32 md:h-36 flex items-center justify-center overflow-hidden">
            {products[0] && (
              <img
                src={products[0].image}
                alt="Product 1"
                className="h-full object-contain"
              />
            )}
          </div>
          <div className="rounded-lg border-2 bg-white shadow-lg  border-gray-300 w-full h-32 md:h-36 flex items-center justify-center overflow-hidden">
            {products[1] && (
              <img
                src={products[1].image}
                alt="Product 2"
                className="h-full object-contain"
              />
            )}
          </div>
          <div className="rounded-full bg-transparent border-2 border-l-primary-light border-transparent border-b-primary-light size-44 mx-auto mt-4 flex items-center justify-center overflow-hidden">
            {products[2] && (
              <div className=" size-32 p-3 justify-items-center rounded-full bg-white shadow-lg">
                <img
                  src={products[2].image}
                  alt="Product 3"
                  className=" h-full  object-contain "
                />
              </div>
            )}
          </div>
          <div className="rounded-lg border-2 bg-white shadow-lg border-gray-300 w-3/4 h-36 self-end flex items-center justify-center overflow-hidden">
            {products[3] && (
              <img
                src={products[3].image}
                alt="Product 4"
                className="h-full object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
