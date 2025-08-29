// bai26.ts
import { Product } from "./bai08";

export class Order {
    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getTotal(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
