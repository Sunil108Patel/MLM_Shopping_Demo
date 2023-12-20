import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    {path:'login', component:LoginComponent},
    {path:'register', component:RegistrationComponent},
    {path:'dashboard',component:DashboardComponent},
    // {path:'navbar',component:NavbarComponent},
    {path:'navbar1',component:Navbar1Component}
];
