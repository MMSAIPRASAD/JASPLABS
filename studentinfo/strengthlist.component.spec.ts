import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthlistComponent } from './strengthlist.component';

describe('StrengthlistComponent', () => {
  let component: StrengthlistComponent;
  let fixture: ComponentFixture<StrengthlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
