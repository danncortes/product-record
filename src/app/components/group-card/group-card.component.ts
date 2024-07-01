import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

type CardSize = 2 | 3 | 4 | 6;

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss'
})
export class GroupCardComponent {
  @Input() title: string | undefined;
  @Input() size: CardSize | undefined;

  constructor() {
  }
}
