import { Component, Input } from '@angular/core';
import { GroupConfig } from '../../services/app.service';
import { RecordsStackComponent } from '../records-stack/records-stack.component';
import { ProductRecordComponent } from '../product-record/product-record.component';

@Component({
  selector: 'app-stats-card-content',
  standalone: true,
  imports: [ProductRecordComponent],
  templateUrl: './stats-card-content.component.html',
  styleUrl: './stats-card-content.component.scss'
})
export class StatsCardContentComponent {
  @Input() productsId: GroupConfig['products'] | null = null;
  @Input() displayType: GroupConfig['displayType'] | null = null;

  constructor() {

  }
}
