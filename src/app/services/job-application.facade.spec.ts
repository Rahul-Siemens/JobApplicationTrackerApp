import { TestBed } from '@angular/core/testing';

import { JobApplicationFacade } from './job-application.facade';

describe('JobApplicationFacade', () => {
  let service: JobApplicationFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
