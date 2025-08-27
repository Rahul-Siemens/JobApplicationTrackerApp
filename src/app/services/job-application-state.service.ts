import { Injectable } from '@angular/core';
import { JobApplicationModel } from '../models/job-application-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationStateService {
  private readonly _applications = new BehaviorSubject<JobApplicationModel[]>([]);
  readonly applications$ = this._applications.asObservable();

  loadApplications(apps: JobApplicationModel[]) {
    this._applications.next(apps);
  }

}
