import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModulesComponent } from './my-modules.component';

describe('MyModulesComponent', () => {
  let component: MyModulesComponent;
  let fixture: ComponentFixture<MyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
