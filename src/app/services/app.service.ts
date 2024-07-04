import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

export type GroupConfig = {
    group_id: number
    products: number[],
    grid: number,
    displayType: "chart" | "cards" | "rows"
}

export type Config = {
  dashboard: {
    records_per_product: number,
    groups: GroupConfig[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  defaultConfig: WritableSignal<Config | null> = signal(null);
  userConfig: WritableSignal<Config | null> = signal(null);
  config: Signal<Config | null> = computed(() => this.userConfig() || this.defaultConfig()) 

  constructor(private http: HttpClient) {

  }

  private getConfig():Promise<Config> {
    return this.http.get<Config>('http://localhost:4200/data/config.json').toPromise()
  }

  async requestConfig() {
    try {
      const configResponse = await this.getConfig();
      this.defaultConfig.set(configResponse);
    } catch(err) {

    }
  }
}
