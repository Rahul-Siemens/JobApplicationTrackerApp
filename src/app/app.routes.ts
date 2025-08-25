import { Routes } from '@angular/router';
import { JobList } from './components/job-list/job-list';
import { JobForm } from './components/job-form/job-form';
import { JobView } from './components/job-view/job-view';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [
     { path: '',
       redirectTo: '/login',
        pathMatch: 'full' 
      },
     {
      path: 'app',
      component: JobList,
      title: 'Job Applications',
      canActivate: [authGuard]
    },
    {
      path: 'add',
      component: JobForm,
      title: "Job Form",
      canActivate: [authGuard]
    },
    {
      path: 'view/:id',
      component: JobView,
      title: 'Job View',
      canActivate: [authGuard]
    },
    {
      path: 'login',
      component: Login
    },
    {
      path: 'register',
      component: Register
    }
];
