import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortEditComponent } from './cohort-edit.component';

describe('CohortEditComponent', () => {
  let component: CohortEditComponent;
  let fixture: ComponentFixture<CohortEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
