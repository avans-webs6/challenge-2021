import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CohortService } from '../cohort.service';

@Component({
  selector: 'app-cohort-edit',
  templateUrl: './cohort-edit.component.html',
  styleUrls: ['./cohort-edit.component.scss']
})
export class CohortEditComponent implements OnInit {

  cohort$: Observable<any>;
  year: string;

  constructor(
    private route: ActivatedRoute,
    private cohortService: CohortService) { 
  }

  ngOnInit(): void {
    this.year = this.route.snapshot.paramMap.get('year');

    this.cohort$ = this.cohortService.getCohort(this.year);

    this.cohort$.subscribe((data: any) => {
      console.log(data);
    })


    
  }


}
