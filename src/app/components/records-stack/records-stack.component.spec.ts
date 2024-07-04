import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsStackComponent } from './records-stack.component';

describe('RecordsStackComponent', () => {
  let component: RecordsStackComponent;
  let fixture: ComponentFixture<RecordsStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordsStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
