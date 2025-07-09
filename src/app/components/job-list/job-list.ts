import { Component, inject } from '@angular/core';
import { JobApplicationModel } from '../../models/job-application-model';
import { JobApplicationServices } from '../../services/job-application-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css'
})
export class JobList {
  status = ['Applied', 'Applied', 'Interview', 'Offer', 'Rejected'];
  applications$: Observable<JobApplicationModel[]>;
  private router = inject(Router);

  constructor(private jobApplicationService: JobApplicationServices) {
    this.applications$ = this.jobApplicationService.getAllJobApplications();
  }

  onStatusChange(application: JobApplicationModel, status: string) {
    application.status = status;
    this.jobApplicationService.updateJobApplication(application).subscribe();
  }

  navigateToView(id: number) {
    this.router.navigate(['/view', id]);
  }

  cancelNavigateToView(e: MouseEvent) {
    e.stopPropagation();
  }
}
