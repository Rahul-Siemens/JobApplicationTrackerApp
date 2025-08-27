import { Component, effect, inject, input } from '@angular/core';
import { JobApplicationModel } from '../../models/job-application-model';
import { filter, from, map, mergeMap, Observable, take, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicationFacade } from '../../services/job-application.facade';

@Component({
  selector: 'app-job-view',
  imports: [CommonModule],
  templateUrl: './job-view.html',
  styleUrl: './job-view.css',
  standalone: true,
})
export class JobView {
  private facade = inject(JobApplicationFacade);
  jobApplication$: Observable<JobApplicationModel | undefined>;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const appId = Number(this.route.snapshot.paramMap.get('id'));
    if (appId) {
      this.jobApplication$ = this.facade.applications$.pipe(
        mergeMap((apps) => from(apps)),
        filter((app) => app.id === appId),
        take(1)
      );
    }
  }

  onDelete() {
    const appId = Number(this.route.snapshot.paramMap.get('id'));
    if (appId) {
      this.facade.deleteApplication(appId).subscribe(() => {
        alert('Deleted successfully!');
        this.router.navigate(['/app']);
      });
    }
  }
}
