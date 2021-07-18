import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonteacherdataComponent } from './nonteacherdata.component';

describe('NonteacherdataComponent', () => {
  let component: NonteacherdataComponent;
  let fixture: ComponentFixture<NonteacherdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonteacherdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonteacherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
