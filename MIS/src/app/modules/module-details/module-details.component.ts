import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {

  public code: string;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
      this.code = this.route.snapshot.paramMap.get('id');
  }

}
