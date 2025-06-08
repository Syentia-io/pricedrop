import React from "react";
import { Product } from "../type";
import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Heart } from 'lucide-react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push(`${product.id}`)}
      className="min-w-[232px] cursor-pointer max-w-[300px] p-2 rounded-lg  bg-white relative"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
        {/* <Heart size={18} /> */}
      </button>
      <div className="mt-2 text-sm">
        <p className="font-bold">GHS{product.price}</p>
        {product.shipping && (
          <p className="text-xs text-gray-500">{product.shipping}</p>
        )}
        <p className="text-gray-700 mt-1 lowercase line-clamp-2">
          {product.title}
        </p>
        {product.buttonType === "add" ? (
          <button className="mt-2 w-full border rounded-full py-1 text-sm hover:bg-gray-100">
            + Add
          </button>
        ) : (
          <button className="mt-2 w-full border rounded-full py-1 text-sm hover:bg-gray-100">
            Options
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
