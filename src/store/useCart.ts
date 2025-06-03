import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface Product {
  product: number;
  name: string;
  price: number;
  quantity: any;
  productImg?: any;
  stock?: number;
}

interface Update {
  product: number;
  quantity: any;
}

type Store = {
  cart: Product[];
  loading: boolean;
  addToCart: (product: Product) => void;
  buyNow: (product: Product, navigate?: any) => void;
  updateQuantity: (product: Update) => void;
  cancelOrder: (args?: any) => void;
  clearOrder: (args?: any, args2?: any) => void;
  removeItem: (args: { productId: number }) => void;
};

export const useCart = create<Store>()(
  devtools(
    persist(
      (set, get): Store => ({
        cart: [],
        loading: false,
        cancelOrder: (navigate) => {
          set({ cart: [] });

          navigate(`/products`);
        },
        removeItem: ({ productId }) => {
          const remove = get().cart.filter(
            (res: { product: number }) => res?.product !== productId
          );
          set({ cart: remove });
        },
        clearOrder: (navigate, id) => {
          navigate(`/products`);

          set({ cart: [] });
        },
        updateQuantity: (product) => {
          set((state) => {
            const updatedcart = state.cart.map((item) =>
              item.product === product.product
                ? { ...item, quantity: product.quantity }
                : item
            );

            if (product.quantity === "0") {
              // state.cart.filter((item) => item.product !== product.product);

              return {
                cart: updatedcart.filter(
                  (item) => item.product !== product.product
                ),
              };
            } else {
              return { cart: updatedcart };
            }
          });
        },
        addToCart: (product) => {
          set((state) => {
            const existingCartItem = state.cart.find(
              (item) => item.product === product.product
            );
            if (existingCartItem) {
              const updatedcart = state.cart.map((item) =>
                item.product === product.product
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              );

              return { cart: updatedcart };
            } else {
              return {
                cart: [
                  ...state.cart,
                  { ...product, quantity: product.quantity },
                ],
              };
            }
          });
        },
        buyNow: (product, navigate) => {
          set((state) => {
            const existingCartItem = state.cart.find(
              (item) => item.product === product.product
            );
            if (existingCartItem) {
              const updatedcart = state.cart.map((item) =>
                item.product === product.product
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              );

              return { cart: updatedcart };
            } else {
              navigate("/check-out");

              return {
                cart: [
                  ...state.cart,
                  { ...product, quantity: product.quantity },
                ],
              };
            }
          });
        },
      }),
      {
        name: "cart-local-2",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
