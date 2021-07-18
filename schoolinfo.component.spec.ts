import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolinfoComponent } from './schoolinfo.component';

describe('SchoolinfoComponent', () => {
  let component: SchoolinfoComponent;
  let fixture: ComponentFixture<SchoolinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
