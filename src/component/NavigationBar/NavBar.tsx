export const NavigationBar = () => {
  const targetCategories = [
    "Grocery",
    "Clothing, Shoes & Accessories",
    "Baby",
    "Home",
    "Furniture",
    "Kitchen & Dining",
    "Outdoor Living & Garden",
    "Toys",
    "Electronics",
    "Video Games",
    "Movies, Music & Books",
    "Sports & Outdoors",
    "Beauty",
    "Personal Care",
    "Health",
    "Pets",
    "Household Essentials",
    "Arts, Crafts & Sewing",
    "School & Office Supplies",
    "Party Supplies",
    "Luggage",
    "Gift Ideas",
    "Gift Cards",
    "Clearance",
    "Target New Arrivals",
    "Target Finds",
    "#TargetStyle",
    "Top Deals",
    "Target Circle Deals",
    "Weekly Ad",
    "Shop Order Pickup",
    "Shop Same Day Delivery",
    "Registry",
    "RedCard",
    "Target Circle",
    "Find Stores",
  ];

  return (
    <nav className="bg-white fixed top-23 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center space-x-6 text-sm text-gray-700 overflow-x-auto">
        <button className="flex items-center font-semibold hover:text-blue-600 whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <button className="flex items-center font-semibold hover:text-blue-600 whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52-.634 1.226-1.162 2.006-1.514l1.521-.61M11.42 15.17 5.634 20.954A2.652 2.652 0 0 1 2.084 17.4L7.87 11.61M11.42 15.17l2.19-2.19m5.877-5.877L15.831 4.043a2.652 2.652 0 0 0-3.75 0L3.75 10.5M11.42 15.17l2.496 2.496"
            />
          </svg>
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <div className="h-6 border-l border-gray-300"></div>

        {targetCategories.map((category) => (
          <a
            key={category}
            href="#"
            className="hover:text-blue-600 whitespace-nowrap"
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
};
