import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent,
    ColumnComponent,
    CardComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TaskModule { }
