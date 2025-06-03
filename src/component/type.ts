export interface Product {
  id: number;
  title: string;
  price: string;
  shipping?: string;
  imageUrl: string;
  buttonType: "add" | "options";
}
