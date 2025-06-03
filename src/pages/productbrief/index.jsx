import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import RelatedProducts from "./components/RelatedProduct";
import { useParams } from "react-router-dom";

export default function ProductBrief() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    handleFetch();
  }, [id]);

  return (
    <>
      <ProductCard product={product} />
      <RelatedProducts category={product.category} />
    </>
  );
}
