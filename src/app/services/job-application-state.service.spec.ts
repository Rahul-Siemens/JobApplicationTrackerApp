import { TestBed } from '@angular/core/testing';

import { JobApplicationStateService } from './job-application-state.service';

describe('JobApplicationStateService', () => {
  let service: JobApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
