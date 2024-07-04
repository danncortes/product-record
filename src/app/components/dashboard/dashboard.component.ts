import { Component, Signal, computed } from '@angular/core';
import { AppService } from '../../services/app.service';
import { GroupService } from '../../services/group.service';
import { StatsCardComponent } from '../stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  showContent: Signal<boolean> = computed(() => {
    return Boolean(this.appService.config() && this.groupService.groups())
  });

  dashboardGroups = this.appService.config()?.dashboard.groups;
  productGroups = this.groupService.groups();

  constructor(public appService: AppService, public groupService: GroupService) {
  }
}
