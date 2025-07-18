import { useCart } from "@/store/useCart";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const Header = () => {
  // const route = useRouter();
  const { cart } = useCart((state) => state);

  const total = calculateTotalPrice(cart);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-3xl font-bold">
            Price Drop
          </Link>
        </div>
        <div className="flex-grow mx-4 p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search everything"
              className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-blue-600 hover:bg-blue-800 text-white px-4 rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-center items-center flex hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div className="grid">
              <span className="text-xs">Sign In</span>
              <span className="text-xs font-bold block">Account</span>
            </div>
          </a>
          <Link href="/cart" className="relative text-center hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-700 text-xs font-bold rounded-full px-1.5 py-0.5">
              {cart.length}
            </span>
            <span className="text-xs block">₵{total}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
