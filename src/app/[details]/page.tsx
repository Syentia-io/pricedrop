"use client";
import { Header } from "@/component/Header/Header";
import { NavigationBar } from "@/component/NavigationBar/NavBar";
import React, { Fragment, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { products } from "@/utils/products";
import Footer from "@/component/Footer/Footer";
import { useCart } from "@/store/useCart";

const ProductPage: React.FC = () => {
  const pathname = usePathname();
  const { details } = useParams();
  const { addToCart } = useCart((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const detail = products.find(
    (res: { id: number }) => res.id === Number(details)
  );

  const handleAddToCart = () => {
    addToCart({
      product: detail?.id ?? 0,
      name: detail?.title ?? "",
      productImg: detail?.imageUrl,
      price: Number(detail?.price),
      quantity: 1,
    });
  };
  // mt-33
  return (
    <Fragment>
      <div className="bg-gray-100 min-h-screen font-sans">
        {/* Header */}
        <Header />
        <NavigationBar />
        {/* Main Content */}
        <main className="container mx-auto  p-4 lg:pt-44">
          <div className="grid grid-cols-12 gap-6">
            {/* Thumbnails */}
            <div className="col-span-12 lg:col-span-1 flex lg:flex-col items-start space-x-2 lg:space-x-0 lg:space-y-2">
              <img
                src={detail?.imageUrl}
                alt="Thumbnail 1"
                className="w-12 h-12 md:w-16 md:h-16 object-contain border rounded cursor-pointer hover:border-blue-500 border-blue-500"
              />
              <img
                src={detail?.imageUrl}
                alt="Thumbnail 2"
                className="w-12 h-12 md:w-16 md:h-16 object-contain border rounded cursor-pointer hover:border-blue-500"
              />
              <img
                src={detail?.imageUrl}
                alt="Thumbnail 3"
                className="w-12 h-12 md:w-16 md:h-16 object-contain border rounded cursor-pointer hover:border-blue-500"
              />

              <img
                src={detail?.imageUrl}
                alt="Thumbnail 5"
                className="w-12 h-12 md:w-16 md:h-16 object-contain border rounded cursor-pointer hover:border-blue-500"
              />
            </div>

            {/* Main Image */}
            <div className="col-span-12 lg:col-span-5 relative">
              <img
                src={detail?.imageUrl}
                alt="Bronner Brothers Wrapping Lotion Foam"
                className="w-auto h-auto max-h-[500px] mx-auto object-contain"
              />
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </button>
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
              <button className="absolute top-1/2 -translate-y-1/2 left-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 opacity-50 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 opacity-50 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>

            {/* Product Info */}
            <div className="col-span-12 lg:col-span-3 space-y-4 bg-white p-4 rounded-lg">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Bronner Bros.
              </a>
              <h1 className="text-xl font-semibold">{detail?.title}</h1>
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-sm text-gray-600">(4.7)</span>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  77 ratings
                </a>
              </div>
              <hr />
              <div>
                <h2 className="text-md font-semibold mb-2">About this item</h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Clear shine formula</li>
                  <li>Alcohol-free</li>
                  <li>No drying alcohol to damage the hair shaft</li>
                  <li>Ahbai Member® the proud lady</li>
                  <li>Easy combing</li>
                  <li>Adds sheen</li>
                  <li>No flaking</li>
                </ul>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                >
                  View full item details
                </a>
              </div>
              <hr />
              <div>
                <h2 className="text-md font-semibold mb-3">At a glance</h2>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-gray-500">Brand</p>
                    <p className="font-medium text-gray-800">Bronner Bros.</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-gray-500">Count</p>
                    <p className="font-medium text-gray-800">1</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded col-span-2 sm:col-span-1">
                    {" "}
                    {/* Adjusted for better fit */}
                    <p className="text-gray-500">Hair care key benefits</p>
                    <p className="font-medium text-gray-800">
                      Detangling, Frizz Control, Moisturizing...
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-gray-500">Dispenser style</p>
                    <p className="font-medium text-gray-800">Pump</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-gray-500">Condition</p>
                    <p className="font-medium text-gray-800">New</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-gray-500">Primary ingredient</p>
                    <p className="font-medium text-gray-800">Olive oil</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline mt-3 inline-block"
                >
                  View all specifications
                </a>
              </div>
            </div>

            {/* Purchase Box */}
            <div className="col-span-12 lg:col-span-3">
              <div className="border p-4 rounded-lg shadow-sm bg-white space-y-4">
                <div>
                  <span className="text-2xl font-bold text-green-600">
                    Now GHS{detail?.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    GHS{detail?.shipping}
                  </span>
                  {/* <span className="text-sm text-gray-500 ml-2">97.8 ¢/fl oz</span> */}
                  <div className="mt-1">
                    <span className="text-sm text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-semibold">
                      You save GHS2.69
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    Price when purchased online
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-3 h-3 ml-1 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </p>
                </div>

                <div className="text-sm text-gray-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Free 90-day returns
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Other options from GHS8.29
                </a>

                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 cursor-pointer text-white font-semibold py-3 rounded-full w-full text-center hover:bg-blue-700 transition duration-150"
                >
                  Add to cart
                </button>

                <div>
                  <h3 className="text-md font-semibold mb-2">
                    How you'll get this item:
                  </h3>
                  <label className="flex items-center space-x-2 text-sm mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs">
                      I want shipping & delivery savings with{" "}
                      <span className="font-bold text-xs text-blue-600">
                        PriceDrop
                      </span>
                      {/* <span className="font-bold text-yellow-400">+</span> */}
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mb-3">
                    You get 30 days free! Choose a plan at checkout.
                  </p>

                  <div className="flex space-x-2 text-sm">
                    <div className="border-2 border-blue-600 p-3 rounded-md text-center flex-1 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto mb-1 text-blue-600"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.849 8.895l-3.686 3.686m0 0a.375.375 0 10.53 0l3.686-3.686m-4.216 3.686L12 12.562m2.17-2.17l1.591 1.591M5.106 17.785l1.15-.964m11.49 0l1.149.964M7.874 10.622L6.305 9.053m11.39 0l1.569 1.569M5.106 17.785l1.15-.964m11.49 0l1.149.964M7.874 10.622L6.305 9.053m11.39 0l1.569 1.569"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75h7.5M10.5 18.75c0-1.538-1.007-2.864-2.5-3.399M13.5 18.75c0-1.538 1.007-2.864 2.5-3.399M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25h12A2.25 2.25 0 0020.25 18V9.75a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 9.75v8.25A2.25 2.25 0 006 20.25z"
                        />
                      </svg>
                      <p className="font-semibold">Shipping</p>
                      <p className="text-xs text-gray-600">Arrives Jun 5</p>
                      <p className="text-xs text-green-600">
                        Order within 14hr 8 min
                      </p>
                    </div>
                    <div className="border p-3 rounded-md text-center flex-1 bg-gray-50 text-gray-400 cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2.14M12 13.5h2.25M12 17.25h2.25m1.5-7.5V5.625c0-.621-.504-1.125-1.125-1.125H13.5M13.5 3H7.228a2.25 2.25 0 00-2.163 1.382l-.897 2.813M12 3c.878 0 1.664.252 2.316.684M12 3v1.875m0 0c-.334.142-.662.321-.977.533M12 3c-.912 0-1.778.226-2.53.638m-4.218 5.843A15.047 15.047 0 016 9.125c0-1.358.207-2.654.593-3.873m11.107 3.873c.386 1.219.593 2.515.593 3.873a15.047 15.047 0 01-2.859 8.456"
                        />
                      </svg>
                      <p className="font-semibold">Pickup</p>
                      <p className="text-xs">Not available</p>
                    </div>
                    <div className="border p-3 rounded-md text-center flex-1 bg-gray-50 text-gray-400 cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.139A48.744 48.744 0 0012 4.5c-.272 0-.54.007-.806.021m-2.287.44A48.853 48.853 0 016.75 5.175m9.75 13.575v-.958c0-.568.422-1.048.987-1.139a48.744 48.744 0 002.453-3.284M6.75 18.75v-.958c0-.568-.422-1.048-.987-1.139a48.744 48.744 0 01-2.453-3.284"
                        />
                      </svg>
                      <p className="font-semibold">Delivery</p>
                      <p className="text-xs">Not available</p>
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <p>
                    Sacramento, 95829{" "}
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      Change
                    </a>
                  </p>
                  <p className="mt-1">
                    Shipping of this product may be{" "}
                    <span className="font-semibold">
                      restricted to Sacramento, 95829
                    </span>
                  </p>
                  <p className="text-red-600 font-semibold mt-2">Only 3 left</p>
                </div>

                <hr />

                <div className="text-sm space-y-1">
                  <div className="flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2.14M12 13.5h2.25M12 17.25h2.25m1.5-7.5V5.625c0-.621-.504-1.125-1.125-1.125H13.5M13.5 3H7.228a2.25 2.25 0 00-2.163 1.382l-.897 2.813M12 3c.878 0 1.664.252 2.316.684M12 3v1.875m0 0c-.334.142-.662.321-.977.533M12 3c-.912 0-1.778.226-2.53.638m-4.218 5.843A15.047 15.047 0 016 9.125c0-1.358.207-2.654.593-3.873m11.107 3.873c.386 1.219.593 2.515.593 3.873a15.047 15.047 0 01-2.859 8.456"
                      />
                    </svg>
                    Sold by{" "}
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      OTCRx4U
                    </a>
                  </div>
                  <p className="text-gray-600 ml-7">Fulfilled by pricedrop</p>
                  <div className="flex items-center space-x-1 ml-7">
                    <div className="flex text-yellow-400 text-xs">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>{" "}
                      {/* Assuming similar rating */}
                    </div>
                    <span className="text-xs text-gray-600">
                      4332 seller reviews
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Free 90-day returns{" "}
                  <a href="#" className="text-blue-600 hover:underline ml-1">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductPage;
