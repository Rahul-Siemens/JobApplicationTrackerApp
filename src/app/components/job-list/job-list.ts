import { Component, OnInit } from '@angular/core';
import { JobApplicationModel } from '../../models/job-application-model';
import { JobApplicationServices } from '../../services/job-application-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css'
})
export class JobList {
  status = ['Applied', 'Interview', 'Offer', 'Rejected'];
  applications$: Observable<JobApplicationModel[]>;

  constructor(private jobApplicationService: JobApplicationServices) {
    this.applications$ = this.jobApplicationService.getAllJobApplications();
  }

  onStatusChange(application: JobApplicationModel, status: string) {
    application.status = status;
    this.jobApplicationService.updateJobApplication(application).subscribe();
  }
}
