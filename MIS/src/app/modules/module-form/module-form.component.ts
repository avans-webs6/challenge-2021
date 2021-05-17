import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import Module from '../module';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit, OnChanges {

  @Input()
  public module: Module;

  public moduleForm: FormGroup;

  @Output()
  public onChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  //I.V.M Aanpassingen van Input
  ngOnChanges(changes: SimpleChanges): void {
      
      //new Module(etc) is een trucje om te zorgen dat alle (ook lege) velden aanwezig zijn op het formulier. 
      //Helaas werkt casten naar een type niet in dit geval. 
      let tmp = new Module(this.module);
      this.moduleForm = this.formBuilder.group(tmp); 

      this.moduleForm.valueChanges.subscribe(module => {
        this.onChange.emit(module);
      })
  }

  ngOnInit(): void {
   
  }

}
