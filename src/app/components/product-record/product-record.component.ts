import { Component, Input, WritableSignal, signal } from '@angular/core';
import { GroupConfig } from '../../services/app.service';
import { ProductRecord, RecordService } from '../../services/record.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-record',
  standalone: true,
  imports: [],
  templateUrl: './product-record.component.html',
  styleUrl: './product-record.component.scss',
})
export class ProductRecordComponent {
  @Input() productId: number | null = null;
  @Input() displayType: GroupConfig['displayType'] | null = null;
  records: WritableSignal<ProductRecord[] | null> = signal(null);
  product: WritableSignal<Product | null> = signal(null);

  constructor(private recordService: RecordService, private productService: ProductService) {}

  ngOnInit() {
    if (this.productId) {
      this.requestRecords();
      this.requestProduct()
    }
  }

  async requestRecords() {
    try {
      const records = await this.recordService.getRecords(this.productId!);
      this.records.set(records);
    } catch (err) {
      console.log(err);
    }
  }

  async requestProduct() {
    try {
      const product = await this.productService.getProduct(this.productId!);
      this.product.set(product)
    } catch(err) {
      console.log(err)
    }
  }
}
