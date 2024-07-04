import { Component, Input } from '@angular/core';
import { ProductRecord } from '../../services/record.service';

@Component({
  selector: 'app-record-card',
  standalone: true,
  imports: [],
  templateUrl: './record-card.component.html',
  styleUrl: './record-card.component.scss'
})
export class RecordCardComponent {
  @Input() record: ProductRecord | null = null;

  constructor() {

  }

}
