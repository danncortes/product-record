import { Component, Input } from '@angular/core';
import { ProductRecord } from '../../services/record.service';
import { RecordCardComponent } from '../record-card/record-card.component';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-records-stack',
  standalone: true,
  imports: [RecordCardComponent],
  templateUrl: './records-stack.component.html',
  styleUrl: './records-stack.component.scss'
})
export class RecordsStackComponent {
  @Input() records: ProductRecord[] | null = null;
  @Input() product: Product | null = null;
}
