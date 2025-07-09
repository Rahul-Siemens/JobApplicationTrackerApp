import { Routes, withComponentInputBinding } from '@angular/router';
import { JobList } from './components/job-list/job-list';
import { JobForm } from './components/job-form/job-form';
import { JobView } from './components/job-view/job-view';

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
    },
    {
      path: 'view/:id',
      component: JobView,
      title: 'Job View'
    }
];
