import { Component, Input } from '@angular/core';
import { ProductRecord } from '../../services/record.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CurrencyFormatDirective } from '../../directives/currency-format.directive';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-record-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, CurrencyFormatDirective],
  templateUrl: './record-card.component.html',
  styleUrl: './record-card.component.scss'
})
export class RecordCardComponent {
  @Input() record!: ProductRecord;
  @Input() product!: Product;

  constructor() {
  }

}
