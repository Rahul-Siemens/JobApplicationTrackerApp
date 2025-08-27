import { Component, inject } from '@angular/core';
import { JobApplicationModel } from '../../models/job-application-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { JobApplicationFacade } from '../../services/job-application.facade';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css'
})
export class JobList {
  status = ['Applied', 'Interview', 'Offer', 'Rejected'];
  applications$: Observable<JobApplicationModel[]>;
  private facade = inject(JobApplicationFacade);
  private router = inject(Router);

  constructor() {
    this.applications$ = this.facade.applications$;
    this.facade.loadApplications();
  }

  onStatusChange(application: JobApplicationModel, status: string) {
    application.status = status;
    this.facade.updateApplication(application);
  }

  navigateToView(id: number) {
    this.router.navigate(['/view', id]);
  }

  cancelNavigateToView(e: MouseEvent) {
    e.stopPropagation();
  }
}
