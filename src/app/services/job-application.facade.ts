import { Injectable } from '@angular/core';
import { JobApplicationServices } from './job-application-services';
import { JobApplicationStateService } from './job-application-state.service';
import { Observable, switchMap, tap } from 'rxjs';
import { JobApplicationModel } from '../models/job-application-model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationFacade {

applications$ : Observable<JobApplicationModel[]>;

  constructor(
    private api: JobApplicationServices,
    private state: JobApplicationStateService
  ) { 
      this.applications$ = this.state.applications$;
  }

  loadApplications(): void {
    this.api.getAllJobApplications()
    .pipe(

      tap(apps => this.state.loadApplications(apps))

    ).subscribe();
  }

  addApplication(app: JobApplicationModel): Observable<JobApplicationModel[]> {
    return this.api.addJobApplication(app)
    .pipe(
      switchMap(() => this.api.getAllJobApplications()),
      tap( apps => this.state.loadApplications(apps))
    );
  }

  updateApplication(app: JobApplicationModel): void {
    this.api.updateJobApplication(app)
    .pipe(
      switchMap(() => this.api.getAllJobApplications()),
      tap( apps => this.state.loadApplications(apps))
    ).subscribe();
  }

  deleteApplication(id: number): Observable<JobApplicationModel[]> {
    return this.api.deleteJobApplication(id)
    .pipe(
      switchMap(() => this.api.getAllJobApplications()),
      tap( apps => this.state.loadApplications(apps))
    );
  }

}
