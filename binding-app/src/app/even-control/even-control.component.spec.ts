import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenControlComponent } from './even-control.component';

describe('EvenControlComponent', () => {
  let component: EvenControlComponent;
  let fixture: ComponentFixture<EvenControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
