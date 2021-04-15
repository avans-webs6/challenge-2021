import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  public modules = [
    { code: 'WEBS6', EC: 3, name: 'Advanced Javascript' },
    { code: 'DPINT', EC: 4, name: 'Design Patterns' },
    { code: 'SOPRJ12', EC: 5, name: 'PROJECT EVERYWHERE' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
