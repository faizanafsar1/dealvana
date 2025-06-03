import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const ProductCard = ({ product }) => {
  return (
    <section className="max-w-4xl content-center  mx-auto bg-white rounded-2xl mt-5 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="rounded-xl max-h-56 md:max-h-96 justify-items-center p-5 m-5 shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-auto max-h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-3 *:shadow-lg pb-5 *:border *:hover:border-green-200 *:rounded-lg *:border-gray-200 justify-center">
            <div className="size-20 text-center content-center">img1</div>
            <div className="size-20 text-center content-center">img2</div>
            <div className="size-20 text-center content-center">img3</div>
            <div className="size-20 text-center content-center">img4</div>
          </div>
        </div>

        <div className="p-6 flex flex-col ">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <div className="border-b border-gray-300 pb-4">
              <p className="text-lg font-semibold text-primary-dark mb-2">
                ${product.price?.toFixed(2)}
              </p>

              <p className="text-sm">
                <span className="font-medium">Rating:</span> ⭐
                {product?.rating?.rate} / 5
              </p>
            </div>
            <h3 className="text-lg font-bold my-2">Description</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4 md:mt-24 *:*:w-full *:w-full">
            <Link to={"/"}>
              <Button label={"Buy Now"} style={"primary"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
