import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddControlComponent } from './odd-control.component';

describe('OddControlComponent', () => {
  let component: OddControlComponent;
  let fixture: ComponentFixture<OddControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
