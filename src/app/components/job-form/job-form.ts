import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobApplicationFacade } from '../../services/job-application.facade';

@Component({
  selector: 'app-job-form',
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.css'
})
export class JobForm {
form: FormGroup;
private facade = inject(JobApplicationFacade);

constructor(private formBuilder: FormBuilder, private router: Router) {
  this.form = this.formBuilder.group({
    companyName: ['', Validators.required],
    position: ['', Validators.required],
    status: ['Applied'],
    dateApplied: [new Date().toISOString().split('T')[0]]
  });
}

submit() {
  if(this.form.valid) {
    this.facade.addApplication(this.form.value).subscribe(() => {
      alert('Application Added Successfully!!!');
      this.form.reset();
      this.router.navigate(['/app']);
    });
  } else {
    alert('Invalid Application');
  }
}

}
