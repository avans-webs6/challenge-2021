import { ComponentFixture, TestBed } from '@angular/core/testing';
import testbed from 'src/test/testbed';

import { ModuleDetailsComponent } from './module-details.component';

xdescribe('ModuleDetailsComponent', () => {
  let component: ModuleDetailsComponent;
  let fixture: ComponentFixture<ModuleDetailsComponent>;

  beforeEach(async () => {
    testbed.declarations.push(ModuleDetailsComponent);
    await TestBed.configureTestingModule(testbed)
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
