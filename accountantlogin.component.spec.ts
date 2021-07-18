import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantloginComponent } from './accountantlogin.component';

describe('AccountantloginComponent', () => {
  let component: AccountantloginComponent;
  let fixture: ComponentFixture<AccountantloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
