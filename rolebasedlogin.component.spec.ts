import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolebasedloginComponent } from './rolebasedlogin.component';

describe('RolebasedloginComponent', () => {
  let component: RolebasedloginComponent;
  let fixture: ComponentFixture<RolebasedloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolebasedloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolebasedloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
