import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  
  constructor(){}
  listUser:Array<{id:string,name:string}>=[
    {
      id:'1',
      name:'Leifer'
    },{
      id:'2',
      name:'Maria'
    },{
      id:'3',
      name:'Pedro'
    },
  ]
}
