import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageComponent2 } from './page/login-page.component';
import { HomeComponent } from '../../home/home.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'register',
    component:LoginPageComponent2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
