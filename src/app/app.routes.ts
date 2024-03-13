import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { KeepAppComponent } from './component/keep-app/keep-app.component';
import { ReviewLoginAppComponent } from './component/review-login-app/review-login-app.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'KeepApp',component: KeepAppComponent},
  {path: "ReviewLogin", component: ReviewLoginAppComponent}
];
