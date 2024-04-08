import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validateSessionGuard } from '@core/guards/validate-session.guard';
import { AuthModule } from '@modules/auth/auth.module';//importacion implicita

 enum rutas{
  task="@modules/task/task.module.ts",
  auth="@modules/auth/auth.module.ts"
}

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path:'task',
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule)//,//importacion dinamica
    //canActivate:[validateSessionGuard]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
