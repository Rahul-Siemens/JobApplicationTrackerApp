import { Routes } from '@angular/router';
import { JobList } from './components/job-list/job-list';
import { JobForm } from './components/job-form/job-form';

export const routes: Routes = [
     {
      path: '',
      component: JobList,
      title: 'Job Applications'
    },
    {
      path: 'add',
      component: JobForm,
      title: "Job Form"
    }
];
