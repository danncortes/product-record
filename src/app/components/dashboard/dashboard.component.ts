import { Component, Signal, computed } from '@angular/core';
import { StatsGridComponent } from '../stats-grid/stats-grid.component';
import { AppService } from '../../services/app.service';
import { GroupService } from '../../services/group.service';
import { GroupCardComponent } from '../group-card/group-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsGridComponent, GroupCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  showContent: Signal<boolean> = computed(() => {
    return Boolean(this.appService.config()) && Boolean(this.groupService.groups())
  })
  dashboardGroups = this.appService.config()?.dashboard.groups;

  constructor(public appService: AppService, public groupService: GroupService) {
  }
}
