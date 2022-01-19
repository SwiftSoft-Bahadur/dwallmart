import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaComponent } from './producta.component';

describe('ProductaComponent', () => {
  let component: ProductaComponent;
  let fixture: ComponentFixture<ProductaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
