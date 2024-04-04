import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validateSessionGuard } from '@core/guards/validate-session.guard';
import { AuthModule } from '@modules/auth/auth.module';//importacion implicita


const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>AuthModule
  },
  {
    path:'task',
    loadChildren:()=>import(rutas.auth).then((m)=>m.TaskModule),//importacion dinamica
    canActivate:[validateSessionGuard]
  }
];

const enum  rutas{
  task='@modules/task/task.module',
  auth='@modules/auth/auth.module'
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
