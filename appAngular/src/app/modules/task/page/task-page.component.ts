import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  
  constructor(){}
  results:Array<any>=[
    'respuesta 1',
    'respuesta 2',
    'respuesta 3',
    'respuesta 4 '
  ]
}
