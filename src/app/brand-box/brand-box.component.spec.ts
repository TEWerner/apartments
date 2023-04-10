import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBoxComponent } from './brand-box.component';

describe('BrandBoxComponent', () => {
  let component: BrandBoxComponent;
  let fixture: ComponentFixture<BrandBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
