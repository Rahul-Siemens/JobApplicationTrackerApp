import { TestBed } from '@angular/core/testing';

import { JobApplicationServices } from './job-application-services';

describe('JobApplication', () => {
  let service: JobApplicationServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
