import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdataComponent } from './teacherdata.component';

describe('TeacherdataComponent', () => {
  let component: TeacherdataComponent;
  let fixture: ComponentFixture<TeacherdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
