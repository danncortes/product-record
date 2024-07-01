import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

type Group = {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: WritableSignal<Map<number, Group> | null> = signal(null);
 
  constructor(private http: HttpClient) { }

  private getGroups(): Promise<Group[]> {
    return this.http.get('http://localhost:4200/data/groups.json').toPromise();
  }

  async requestGroups(): Promise<void> {
    try {
      const groupResponse = await this.getGroups();
      this.groups = signal(new Map(groupResponse.map((group) => ([group.id, group]))));
    } catch(err) {

    }
  }
}
