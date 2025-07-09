import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobApplicationServices } from '../../services/job-application-services';

@Component({
  selector: 'app-job-form',
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.css'
})
export class JobForm {
form: FormGroup;

constructor(private formBuilder: FormBuilder, private jobApplicationService: JobApplicationServices) {
  this.form = this.formBuilder.group({
    companyName: ['', Validators.required],
    position: ['', Validators.required],
    status: ['Applied'],
    dateApplied: [new Date().toISOString().split('T')[0]]
  });
}

submit() {
  if(this.form.valid) {
    this.jobApplicationService.addJobApplication(this.form.value).subscribe(() => {
      alert('Application Added Successfully!!!');
      this.form.reset();
    });
  } else {
    alert('Invalid Application');
  }
}

}
