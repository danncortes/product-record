import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';
import { GroupService } from './services/group.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-record';

  constructor(private appSevice: AppService, private groupService: GroupService) {
    this.appSevice.requestConfig();
    this.groupService.requestGroups()
  }
}
