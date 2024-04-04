import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [{
  path:'register',
 // redirectTo:'/register',
  component:RegisterFormComponent
},
  {
    path:'login',
    component:LoginPageComponent,
    children:[{
      
    }]
  }
  
    
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
