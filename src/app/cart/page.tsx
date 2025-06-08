"use client";
import { Header } from "@/component/Header/Header";
import { NavigationBar } from "@/component/NavigationBar/NavBar";
import { useCart } from "@/store/useCart";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import React from "react";

// Placeholder icons (replace with actual SVGs from Heroicons or a similar library)
// const IconGrid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     {...props}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z"
//     />
//   </svg>
// );
// const IconServices: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     {...props}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
//     />
//   </svg>
// );
const IconChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
// const IconWarning: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     {...props}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
//     />
//   </svg>
// );
const IconInfo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);
const IconPickupDelivery: React.FC<React.SVGProps<SVGSVGElement>> = (
  props // Using truck icon as seen in other Walmart UIs
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    />
  </svg>
);
const IconPlus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
const IconChevronLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
const IconChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  unitPrice?: string;
  bestSeller?: boolean;
}

const essentialsProducts: Product[] = [
  {
    id: "1",
    name: "Black and White, 2-Ply Paper Towels, 88 Sheets",
    image:
      "https://i5.walmartimages.com/seo/Great-Value-Everyday-Strong-Paper-Towels-2-Ply-88-Sheets-Per-Roll-1-Roll_07e9c63a-8f26-47f1-950f-786187d859b9.a736817f0d57f097782707c1d2926da2.jpeg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    price: "$0.72",
    unitPrice: "81.8¢/100 ct",
    bestSeller: true,
  },
  {
    id: "2",
    name: 'Great Value Everyday Disposable Paper Plates, 100 ct, 8.5"',
    image:
      "https://i5.walmartimages.com/seo/Great-Value-Everyday-Disposable-Paper-Plates-100-Count-8-5_5e66cb40-9371-407b-b40d-920d14d0b935.4532113539b056a383b23a40789b8023.jpeg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    price: "$5.58",
    unitPrice: "$5.58/100 ct",
    bestSeller: true,
  },
  {
    id: "3",
    name: "Angel Soft 2-Ply Toilet Paper, 9 Mega Rolls",
    image:
      "https://i5.walmartimages.com/seo/Angel-Soft-Toilet-Paper-9-Mega-Rolls-36-Regular-Rolls-2-Ply-Bath-Tissue_f4894670-a52a-49e3-990e-1671d300c348.c010f7d497085b363db2215fc20b78ac.jpeg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    price: "$6.73",
    unitPrice: "23.4¢/100 ct",
    bestSeller: true,
  },
  {
    id: "4",
    name: "Great Value Fresh Seal Double Zipper Sandwich Bags, 100 ct",
    image:
      "https://i5.walmartimages.com/seo/Great-Value-Fresh-Seal-Double-Zipper-Sandwich-Bags-100-Count_ef028d48-16a7-436d-8448-40166e01078a.2e0b0006b04b71a6971d86d14e55f9ca.jpeg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    price: "$2.38",
    unitPrice: "2.4¢/count",
    bestSeller: true,
  },
  {
    id: "5",
    name: "Core Power Protein Shake with 26g Protein, Chocolate, 14 fl oz",
    image:
      "https://i5.walmartimages.com/seo/Fairlife-Core-Power-26g-Protein-Milk-Shake-Chocolate-14-fl-oz_b28c27a7-a300-4468-add5-1922f32f6af0.139d20af04ab87878d9101926a0650e4.jpeg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    price: "$3.58",
    unitPrice: "25.6¢/fl oz",
    bestSeller: true,
  },
  {
    id: "6",
    name: "Another Product For Scrolling",
    image: "https://via.placeholder.com/128",
    price: "$9.99",
    unitPrice: "10¢/item",
    bestSeller: false,
  },
];

export default function Page() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const { cart, removeItem } = useCart((state) => state);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8; // Scroll by 80% of visible width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const totalOrder = calculateTotalPrice(cart);

  return (
    <div className="bg-gray-100  pt-40 min-h-screen">
      <Header />
      <NavigationBar />

      <main className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {" "}
          {/* Adjusted grid for 2/3 and 1/3 split more closely */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cart ({cart.length} items)
            </h1>

            {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <IconWarning className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    1 item in your cart is currently unavailable.
                    <a
                      href="#"
                      className="ml-1 font-medium text-yellow-800 underline hover:text-yellow-700"
                    >
                      View details
                    </a>
                  </p>
                </div>
              </div>
            </div> */}

            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 sm:py-5 flex items-center justify-between">
                <div className="flex items-center">
                  <IconPickupDelivery className="h-7 w-7 text-blue-600" />
                  <h2 className="ml-3 text-lg sm:text-xl font-semibold text-gray-900">
                    Pickup and delivery options
                  </h2>
                </div>
                <button>
                  <IconChevronDown className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {cart.length ? " Currently available" : " Your cart is empty"}
                </h3>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                  Save all for later
                </button>
              </div>

              {cart.map((res) => (
                <div
                  key={res.product}
                  className="bg-white border border-gray-200 rounded-lg"
                >
                  <div className="p-4 flex flex-col sm:flex-row sm:space-x-4">
                    <img
                      src={res?.productImg ?? ""}
                      alt={res.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0 self-center sm:self-start mb-3 sm:mb-0"
                    />
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900">
                        {res.name}
                      </p>
                      {/* <p className="text-xs text-gray-500 mt-0.5">
                        97.8¢/fl oz
                      </p> */}
                      <p className="mt-1.5 text-sm text-red-600 flex items-center">
                        Available stock 95829{" "}
                        <IconInfo className="w-4 h-4 ml-1 text-gray-400" />
                      </p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0 mt-2 sm:mt-0">
                      <p className="text-lg font-semibold text-gray-900">
                        ₵{res.price}
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        ₵{res.price + 50}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end items-center space-x-4 rounded-b-lg">
                    <button
                      onClick={() => removeItem({ productId: res.product })}
                      className="text-sm font-medium cursor-pointer text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Remove
                    </button>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                      Save for later
                    </button>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-700">Qty</span>
                      <span className="text-sm font-semibold text-gray-900">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "none" }} className="pt-2">
              {" "}
              {/* Added pt-2 for slight separation */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Add your essentials
              </h3>
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-4 scrollbar-hide -mx-1 px-1"
                >
                  {essentialsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-lg p-2.5 w-[136px] sm:w-[150px] flex-shrink-0 flex flex-col"
                    >
                      {product.bestSeller && (
                        <span className="self-start bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-full mb-1.5">
                          Best seller
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-24 sm:h-28 w-full object-contain mb-1.5"
                      />
                      <div className="mt-auto flex flex-col">
                        <button className="w-full bg-blue-600 text-white text-xs sm:text-sm font-medium py-1.5 px-2 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-1 my-1.5">
                          <IconPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Add</span>
                        </button>
                        <p className="text-sm sm:text-base font-bold text-gray-900">
                          {product.price}
                        </p>
                        {product.unitPrice && (
                          <p className="text-[10px] sm:text-xs text-gray-500 -mt-0.5">
                            {product.unitPrice}
                          </p>
                        )}
                        <p
                          className="text-xs text-gray-700 mt-0.5 h-8 leading-tight overflow-hidden"
                          style={{
                            WebkitLineClamp: 2,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {product.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {essentialsProducts.length > 4 && (
                  <>
                    <button
                      onClick={() => scroll("left")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100 z-10 ring-1 ring-gray-200"
                      aria-label="Scroll left"
                    >
                      <IconChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={() => scroll("right")}
                      className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100 z-10 ring-1 ring-gray-200"
                      aria-label="Scroll right"
                    >
                      <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="bg-white shadow sm:rounded-lg p-6 space-y-4 sticky top-6">
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-lg cursor-not-allowed text-base"
              >
                Continue to checkout
              </button>
              <p className="text-xs text-center text-gray-600">
                For the best shopping experience,{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  sign in
                </a>
              </p>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-700">
                  <p>Subtotal ({cart.length} items)</p>
                  <p className="font-medium">₵{totalOrder}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <p>Taxes</p>
                  <p>Calculated at checkout</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-base font-semibold text-gray-900">
                  <p>Estimated total</p>
                  <p>₵{totalOrder}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
