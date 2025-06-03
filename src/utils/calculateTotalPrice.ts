interface Product {
  product: number;
  name: string;
  price: number;
  quantity: any;
  productImg?: any;
  stock?: number;
}

export function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, item) => {
    const quantity = Number(item.quantity) || 0;
    return total + item.price * quantity;
  }, 0);
}
