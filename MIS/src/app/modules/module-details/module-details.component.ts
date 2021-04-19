import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {

  public module : any;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
      let code = this.route.snapshot.paramMap.get('id');

      let storage = localStorage.getItem('modules');
      let modules = JSON.parse(storage) || [];
      this.module = modules.find((m : any) => m.code == code);
  }

}
