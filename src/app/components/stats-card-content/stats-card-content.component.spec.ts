import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCardContentComponent } from './stats-card-content.component';

describe('StatsCardContentComponent', () => {
  let component: StatsCardContentComponent;
  let fixture: ComponentFixture<StatsCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsCardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
