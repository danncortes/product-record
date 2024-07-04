import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { StatsCardContentComponent } from '../stats-card-content/stats-card-content.component';
import { Config, GroupConfig } from '../../services/app.service';

type CardSize = 2 | 3 | 4 | 6;

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [MatCardModule, StatsCardContentComponent],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  @Input() title: string | null = null;
  @Input() size: CardSize | null = null;
  @Input() productsId: GroupConfig['products'] | null = null;
  @Input() displayType: GroupConfig['displayType'] | null = null;

  constructor() {
  }
}
