import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Product = {
  id: number
  group_id: number,
  name: string,
  description: string,
  measure: string,
  pkg: boolean,
  brand_id: number,
  code: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  async getProduct(productId: number): Promise<Product> {
    return this.http.get('http://localhost:4200/data/products.json').toPromise().then((products: Product[]) => {
      const product = products.find(product => product.id === productId);
      if (product) {
        return product
      }
      throw 'Not Found'
    }).catch((err: any) => {
      throw err
    });
  }
}
