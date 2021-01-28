export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
}

export class Product implements IProduct{
  description: string;
  imageUrl: string;
  price: number;
  productCode: string;
  productId: number;
  productName: string;
  releaseDate: string;
  starRating: number;
calculationDiscount(percent: number): number {
  return this.price - (this.price * percent / 100);
}
}
