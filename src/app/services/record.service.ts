import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ProductRecord = {
  id: number;
  product_id: number;
  price: number;
  unitPrice: number;
  priceDiff: number;
  percentChange: number;
  date: string;
  store: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }


  getRecords(productId: ProductRecord['product_id']): Promise<ProductRecord[]> {
    return this.http.get(`http://localhost:4200/data/records/product-${productId}-records.json`).toPromise();
  }
}
