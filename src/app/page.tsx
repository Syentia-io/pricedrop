"use client";
import Footer from "@/component/Footer/Footer";
import { Header } from "@/component/Header/Header";
import { MainContent } from "@/component/Home/MainContent";
import { NavigationBar } from "@/component/NavigationBar/NavBar";
import ProductCard from "@/component/Products/ProductCard";
import { products } from "@/utils/products";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const handleAddToCart = (productId: number | string) => {
  //   console.log(`Parent: Add to cart requested for product ID: ${productId}`);
  //   // Add to cart logic here (e.g., update state, API call)
  // };

  // const handleShowOptions = (productId: number | string) => {
  //   console.log(`Parent: Show options requested for product ID: ${productId}`);
  //   // Logic to display a modal or navigate to product page
  // };

  // const handleToggleWishlist = (productId: number | string) => {
  //   console.log(`Parent: Toggle wishlist for product ID: ${productId}`);
  //   // Update wishlist state
  // };

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <NavigationBar />
      <main className="container mx-auto px-4 mt-30 py-6">
        <MainContent />
        <section className="px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">
            Make His Day—Shop Father’s Day Finds
          </h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex mt-10 space-x-4 overflow-x-auto scrollbar-hide">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex mt-10 space-x-4 overflow-x-auto scrollbar-hide">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
