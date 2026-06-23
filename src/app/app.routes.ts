import { Routes } from '@angular/router';
import { LoginComponent } from './features/components/login/login.component';
import { authGuard } from './core/guard/auth.guard';
import { MainComponent } from './core/layout/main-layout/main/main.component';
import { AuthComponent } from './core/layout/auth-layout/auth/auth.component';

export const routes: Routes = [
  
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/components/register/register.component').then(
            (c) => c.RegisterComponent,
          ),
        title: 'Register',
      },
    ],
  },

  {
    path: '',
    canActivate: [authGuard],
    component: AuthComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/components/home/home.component').then(
            (c) => c.HomeComponent,
          ),
        title: 'Home',
      },
      {
        path: 'courses',
        loadComponent: () =>
          import('./features/components/course/course.component').then(
            (c) => c.CourseComponent,
          ),
        title: 'Courses',
      },
      {
        path: 'courses/:courseId',
        loadComponent: () =>
          import('./features/components/course/course.component').then(
            (c) => c.CourseComponent,
          ),
        title: 'Courses',
      },
      {
        path: 'add-course',
        loadComponent: () =>
          import('./features/components/add-course/add-course.component').then(
            (c) => c.AddCourseComponent,
          ),
        title: 'Add Course',
      },
    ],
  },
];
