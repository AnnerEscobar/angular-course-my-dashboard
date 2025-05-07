import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'dashboard',
    loadComponent: () => import('./dahsboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dahsboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dahsboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dahsboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-view',
        title: 'Defer View',
        loadComponent: () => import('./dahsboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dahsboard/pages/user/user.component'),
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () => import('./dahsboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition',
        loadComponent: () => import('./dahsboard/pages/view-transition/view-transition2.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition',
        loadComponent: () => import('./dahsboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () => import('./dahsboard/pages/input-output/input-output.component'),
      },
      {
        path: 'material',
        title: 'Angular Material',
        loadComponent: () => import('./dahsboard/pages/material/material.component'),
      },
      {
        path: '', redirectTo: 'control-flow', pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];
 