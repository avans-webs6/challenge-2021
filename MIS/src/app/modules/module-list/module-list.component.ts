import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  public modules: any[] = []

  constructor() { 
    let storage = localStorage.getItem('modules');
    this.modules = JSON.parse(storage) || [];
  }

  ngOnInit(): void {
  }

}
