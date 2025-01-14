import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCellComponent } from './custom-cell.component';

describe('CustomCellComponent', () => {
  let component: CustomCellComponent;
  let fixture: ComponentFixture<CustomCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
