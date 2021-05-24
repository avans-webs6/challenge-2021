import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CohortService } from '../cohort.service';

@Component({
  selector: 'app-cohort-list',
  templateUrl: './cohort-list.component.html',
  styleUrls: ['./cohort-list.component.scss']
})
export class CohortListComponent implements OnInit {

  $cohorts: Observable<any[]>;

  constructor(public cohortService: CohortService) { }

  ngOnInit(): void {
    this.$cohorts = this.cohortService.cohorts$;
  }

}
