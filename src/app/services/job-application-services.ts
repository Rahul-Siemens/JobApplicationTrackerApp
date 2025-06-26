import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplicationModel } from '../models/job-application-model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationServices {
  private apiUrl = 'http://localhost:5082/applications';

  constructor(private http: HttpClient) {
  }

  getAllJobApplications(): Observable<JobApplicationModel[]>{
    return this.http.get<JobApplicationModel[]>(this.apiUrl);
  }

  getJobApplicationById(id: number): Observable<JobApplicationModel>{
    return this.http.get<JobApplicationModel>(`${this.apiUrl}/${id}`);
  }

  addJobApplication(application: JobApplicationModel): Observable<JobApplicationModel>{
    return this.http.post<JobApplicationModel>(this.apiUrl, application);
  }

  updateJobApplication(application: JobApplicationModel): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${application.id}`,application);
  }
}
