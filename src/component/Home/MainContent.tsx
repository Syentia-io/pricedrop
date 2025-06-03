import React from "react";

export const MainContent = () => {
  return (
    <>
      {/* Promo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Jurassic World Card */}
        <div className="md:col-span-1 lg:col-span-1 rounded-lg overflow-hidden relative bg-gradient-to-b from-sky-300 to-sky-100 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Must-Have Electronics Drop on 7/2
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block"
            >
              Shop Kitchen Essentials & more
            </a>
          </div>
          {/* <img
            src=""
            alt="Pterodactyl from Jurassic World"
            className="w-full h-auto object-contain mt-4 self-end max-h-40"
          /> */}
          <p className="text-xs text-gray-500 mt-auto pt-2">© dropprice</p>
        </div>

        {/* Pre-Owned & Restored items Card */}
        <div className="md:col-span-2 lg:col-span-2 rounded-lg overflow-hidden relative bg-sky-200 p-6 flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-gray-700">
            Grab It New. Save Like Never Before.
          </p>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-800 my-2">
            Fresh Drops. Flexible Payments.
          </h2>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 text-sm my-4">
            Shop Resold
          </button>
          <div className="flex-grow w-full flex items-center justify-center relative">
            {/* <img
              src=""
              alt="Restored Stealth 2 HD Golf Club"
              className="max-h-72 md:max-h-96 object-contain z-10"
            /> */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-200 flex items-center justify-center">
              <p className="text-3xl font-bold text-green-700">
                It Means The World
              </p>
            </div> */}
          </div>
          <button className="absolute bottom-6 right-6 bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns=""
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Furniture & Beauty Stack */}
        <div className="md:col-span-1 lg:col-span-1 space-y-6">
          <div className="rounded-lg overflow-hidden bg-sky-100 p-6">
            <h2 className="text-xl font-bold text-gray-800">
              Up to 40% off furniture & more
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block"
            >
              Shop now
            </a>
            {/* <img
              src=""
              alt="White vanity set with mirror and stool"
              className="w-full h-auto object-contain mt-4 max-h-32"
            /> */}
          </div>
          <div className="rounded-lg overflow-hidden bg-orange-100 p-6 relative">
            <h2 className="text-xl font-bold text-gray-800">
              Hot, new beauty from GHS100
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block"
            >
              Shop now
            </a>
            {/* <img
              src=""
              alt="Various beauty products including sunscreen, lotion, and perfume"
              className="w-full h-auto object-contain mt-4 max-h-32"
            /> */}
            <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
              New Arrivals
            </span>
          </div>
        </div>

        {/* Lilo & Stitch Card */}
        <div className="md:col-span-1 lg:col-span-1 rounded-lg overflow-hidden relative bg-gradient-to-b from-sky-200 to-sky-50 p-6 flex flex-col justify-between items-center">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Shop TVs, ACs & Essential Electronics
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block text-center w-full"
            >
              Shop now
            </a>
          </div>
          {/* <img
            src=""
            alt="Stitch character sitting on a beach"
            className="w-auto h-auto object-contain mt-4 max-h-60"
          />
          <img
            src=""
            alt="Disney Lilo & Stitch Logo"
            className="w-32 h-auto object-contain mt-4"
          /> */}
        </div>

        {/* Scoop Card */}
        <div className="md:col-span-1 lg:col-span-1 rounded-lg overflow-hidden bg-gray-100 p-6 relative">
          <h2 className="text-xl font-bold text-gray-800">
            Latest Home Appliances to Simplify Life
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:underline mt-1 inline-block"
          >
            Shop now
          </a>
          {/* <img
            src=""
            alt="Model wearing Scoop fashion white dress"
            className="w-full h-auto object-cover mt-2 rounded-md max-h-60"
          />
          <img
            src="#"
            alt="Scoop logo"
            className="absolute bottom-6 left-6 w-20 h-auto"
          /> */}
        </div>

        {/* Flash Deals Card */}
        <div className="md:col-span-1 lg:col-span-1 rounded-lg overflow-hidden bg-yellow-300 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Up to 50% off</h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline mt-1 inline-block"
            >
              Shop now
            </a>
          </div>
          <div className="flex items-end justify-between mt-4">
            <h3 className="text-4xl font-bold text-gray-800">Flash Deals</h3>
            {/* <img
              src="https://i.imgur.com/uD0W4yP.png"
              alt="Laptop with 1080p Full HD Windows 11 display"
              className="w-1/2 h-auto object-contain"
            /> */}
          </div>
        </div>

        {/* Outdoor furniture Card */}
        <div className="md:col-span-1 lg:col-span-1 rounded-lg overflow-hidden bg-gray-200 p-6 relative flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">
            Outdoor furniture & decor
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:underline mt-1 inline-block"
          >
            Shop patio
          </a>
          {/* <img
            src="https://i.imgur.com/gT8y4oJ.png"
            alt="Outdoor patio set with sofa and coffee table by the water"
            className="w-full h-auto object-cover mt-4 rounded-md flex-grow max-h-60"
          /> */}
        </div>
      </div>

      {/* Bottom Banners */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 rounded-lg bg-cyan-400 p-6 flex items-center justify-between text-white">
          <div>
            <p className="font-semibold">
              Shop Sound Systems & More with Dropprice
            </p>
            <h3 className="text-2xl font-bold">—Sound bar</h3>
          </div>
          {/* <img
            src="https://i.imgur.com/pDk5K6W.png"
            alt="Peppa Pig like character Baby Evie toy"
            className="h-20 w-auto"
          /> */}
        </div>
        <div className="md:col-span-2 rounded-lg bg-yellow-400 p-6 flex flex-col md:flex-row items-center justify-between text-gray-800">
          <h3 className="text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            Upgrade Your Home with Furniture & Dropprice
          </h3>
          {/* <img
            src="https://i.imgur.com/WbA7R4X.png"
            alt="Bag of groceries including Cheerios, fruit, and vegetables"
            className="h-24 w-auto object-contain"
          /> */}
        </div>
      </div>
    </>
  );
};
