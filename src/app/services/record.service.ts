import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ProductRecord = {
  id: number;
  product_id: number;
  price: number;
  unit_price: number;
  price_diff: number; 
  percent_change: number;
  /** priceDiff and percentChange refers to difference between the price and the price of the previous one in the received array of records
   * Not necessarily based on a date
   **/
  date: string;
  store_id: number;
  currency_code: string;
  discount_type: 'percentace' | 'fixed' | null;
  discount: number;
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
