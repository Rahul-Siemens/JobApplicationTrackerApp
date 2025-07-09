import { Component, effect, Input, input, OnInit } from '@angular/core';
import { JobApplicationModel } from '../../models/job-application-model';
import { Observable, switchMap, tap } from 'rxjs';
import { JobApplicationServices } from '../../services/job-application-services';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-view',
  imports: [CommonModule],
  templateUrl: './job-view.html',
  styleUrl: './job-view.css',
  standalone: true
})
export class JobView {
  readonly id = input<number>();
  jobApplication$: Observable<JobApplicationModel>;

  constructor(private jobApplicationService: JobApplicationServices) {
    
    effect(() => {
      let appId = this.id();
      if(appId) {
        this.jobApplication$ = this.jobApplicationService.getJobApplicationById(appId);
      }
    })
    
  }

  onDelete() {
    alert("Job deleted.");
  }

}
