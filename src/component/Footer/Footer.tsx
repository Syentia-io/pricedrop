import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center text-xs">
          <p>© 2025 Price Drop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-sm mb-8">
//           {/* Column 1 - For spacing and alignment, can be adjusted or combined */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               All Departments
//             </a>
//             <a href="#" className="hover:underline">
//               Terms of Use
//             </a>
//             <a href="#" className="hover:underline">
//               Pharmacy
//             </a>
//           </div>

//           {/* Column 2 */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Store Directory
//             </a>
//             <a href="#" className="hover:underline">
//               Privacy Notice
//             </a>
//             <a href="#" className="hover:underline">
//               Walmart Business
//             </a>
//           </div>

//           {/* Column 3 */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Careers
//             </a>
//             <a href="#" className="hover:underline">
//               California Supply Chain Act
//             </a>
//             <a href="#" className="hover:underline">
//               #IYWYK
//             </a>
//           </div>

//           {/* Column 4 */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Our Company
//             </a>
//             <a href="#" className="hover:underline flex items-center">
//               <svg
//                 className="w-5 h-5 mr-1 fill-current"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.22 15.26l-4.07-4.07 1.41-1.41 2.66 2.65 5.47-5.47 1.41 1.41-6.88 6.89zM10.5 17l-4-4 1.41-1.41L10.5 14.18l5.09-5.09L17 10.5l-6.5 6.5zm5.25-9.25L10.5 13 9 11.5l5.25-5.25 1.5 1.5z" />
//               </svg>
//               Your Privacy Choices
//             </a>
//             <a href="#" className="hover:underline">
//               Delete Account
//             </a>
//           </div>

//           {/* Column 5 - For remaining links */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Sell on Walmart.com
//             </a>
//             <a href="#" className="hover:underline">
//               Notice at Collection
//             </a>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-sm mb-8">
//           {/* Adjusting layout for the second set of links if needed, or merge above */}
//           {/* Column 1 - (continued) */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Help
//             </a>
//             <a href="#" className="hover:underline">
//               AdChoices
//             </a>
//           </div>

//           {/* Column 2 - (continued) */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Product Recalls
//             </a>
//             <a href="#" className="hover:underline">
//               Consumer Health Data Privacy Notices
//             </a>
//           </div>

//           {/* Column 3 - (continued) */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Accessibility
//             </a>
//             <a href="#" className="hover:underline">
//               Brand Shop Directory
//             </a>
//           </div>

//           {/* Column 4 - (continued) */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Tax Exempt Program
//             </a>
//           </div>

//           {/* Column 5 - (continued) */}
//           <div className="col-span-1 flex flex-col space-y-2">
//             <a href="#" className="hover:underline">
//               Get the Walmart App
//             </a>
//             <a href="#" className="hover:underline">
//               Safety Data Sheet
//             </a>
//           </div>
//         </div>

//         {/* Alternative condensed link layout for better screen fit and matching original */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm mb-8">
//           <a href="#" className="hover:underline">
//             All Departments
//           </a>
//           <a href="#" className="hover:underline">
//             Store Directory
//           </a>
//           <a href="#" className="hover:underline">
//             Careers
//           </a>
//           <a href="#" className="hover:underline">
//             Our Company
//           </a>
//           <a href="#" className="hover:underline">
//             Sell on Walmart.com
//           </a>
//           <a href="#" className="hover:underline">
//             Help
//           </a>
//           <a href="#" className="hover:underline">
//             Product Recalls
//           </a>
//           <a href="#" className="hover:underline">
//             Accessibility
//           </a>
//           <a href="#" className="hover:underline">
//             Tax Exempt Program
//           </a>
//           <a href="#" className="hover:underline">
//             Get the Walmart App
//           </a>
//           <a href="#" className="hover:underline">
//             Safety Data Sheet
//           </a>
//         </div>
//         <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm mb-8">
//           <a href="#" className="hover:underline">
//             Terms of Use
//           </a>
//           <a href="#" className="hover:underline">
//             Privacy Notice
//           </a>
//           <a href="#" className="hover:underline">
//             California Supply Chain Act
//           </a>
//           <a href="#" className="hover:underline flex items-center">
//             <svg
//               className="w-5 h-5 mr-1 fill-current"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               // This is a generic checkmark in a circle, you might need the exact SVG from Walmart
//               // For demonstration, a simple one is used.
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.22 15.26l-4.07-4.07 1.41-1.41 2.66 2.65 5.47-5.47 1.41 1.41-6.88 6.89z" />
//             </svg>
//             Your Privacy Choices
//           </a>
//           <a href="#" className="hover:underline">
//             Notice at Collection
//           </a>
//           <a href="#" className="hover:underline">
//             AdChoices
//           </a>
//           <a href="#" className="hover:underline">
//             Consumer Health Data Privacy Notices
//           </a>
//           <a href="#" className="hover:underline">
//             Brand Shop Directory
//           </a>
//         </div>
//         <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm mb-6">
//           <a href="#" className="hover:underline">
//             Pharmacy
//           </a>
//           <a href="#" className="hover:underline">
//             Walmart Business
//           </a>
//           <a href="#" className="hover:underline">
//             #IYWYK
//           </a>
//           <a href="#" className="hover:underline">
//             Delete Account
//           </a>
//         </div>
