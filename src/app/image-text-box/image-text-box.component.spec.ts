import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextBoxComponent } from './image-text-box.component';

describe('ImageTextBoxComponent', () => {
  let component: ImageTextBoxComponent;
  let fixture: ComponentFixture<ImageTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
