import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import testbed from 'src/test/testbed';
import Module from '../module';

import { ModuleFormComponent } from './module-form.component';

describe('ModuleFormComponent', () => {
  let component: ModuleFormComponent;
  let fixture: ComponentFixture<ModuleFormComponent>;

  beforeEach(async () => {
    //je mag zelf even nadenken waarom ik het via dit testbed object doe
    testbed.declarations.push(ModuleFormComponent);
    await TestBed.configureTestingModule(testbed)
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //fakeAsync magic!
  it('should validate for EC > 5',  fakeAsync(() => {

    component.module = new Module({
      name: "TEST",
      code: "Test",
      EC: 4,
      jaar: "2021"
    });

    component.ngOnChanges(null);
    fixture.detectChanges();

    let input = fixture.debugElement.query(By.css('input#ec'));

    let el = input.nativeElement;
    el.value = 6;
    el.dispatchEvent(new Event('input'));

    //async magic!
    tick();
    fixture.detectChanges();

    expect(component.errors.length).toBe(1);

     
    let errors = fixture.debugElement.queryAll(By.css("li"));
    expect(errors.length).toBe(1);

  }));
});
