import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.scss']
})
export class ModuleCreateComponent implements OnInit {

  public showModal: boolean = false;
  public module: any;

  constructor() { }

  ngOnInit(): void {
    this.module = {};
  }

  create(){
    let storage = localStorage.getItem('modules');
    let modules = storage ? JSON.parse(storage) : [];
    modules.push(this.module);
    localStorage.setItem('modules', JSON.stringify(modules));
    this.module = {};
    this.showModal = false;

  }

}
