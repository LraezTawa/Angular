import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component:TestComponentComponent
  },
  {
    path:'elcompo',
    component:TestComponentComponent
  }
  ,
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
