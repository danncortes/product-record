import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecordComponent } from './product-record.component';

describe('ProductRecordComponent', () => {
  let component: ProductRecordComponent;
  let fixture: ComponentFixture<ProductRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
