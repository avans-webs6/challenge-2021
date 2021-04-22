import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {

  @Input()
  public module: any;

  constructor() { }

  ngOnInit(): void {
  }

}
