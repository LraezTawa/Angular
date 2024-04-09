import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent implements OnInit, OnDestroy{
  
  groups:Array<any>=[]
  listObservables$:Array<Subscription>=[]

  constructor(){}
  ngOnInit(): void {
    const observable1$ = interval(1000).subscribe((res)=>{
      console.log("hi")
    })

    this.listObservables$=[observable1$]

    this.groups=[
      {
        label:'Nuevas tareas',
        color:'Tomato',
        list:[
          {
            order:'Como instalar Angular',
            items:[
              {
                key:'price',
                value:152
              },
              {
                key:'time',
                value:152
              },
              {
                key:'author',
                value:{
                  name:'leifer mendez',
                  avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
        ]
      }
      ,
      {
        label:'Trabajando',
        color:'Green',
        list:[
          {
            order:'Como instalar Angular',
            items:[
              {
                key:'price',
                value:152
              },
              {
                key:'time',
                value:152
              },
              {
                key:'author',
                value:{
                  name:'leifer mendez',
                  avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label:'En proceso',
        color:'Green',
        list:[
          {
            order:'Como instalar Angular',
            items:[
              {
                key:'price',
                value:152
              },
              {
                key:'time',
                value:152
              },
              {
                key:'author',
                value:{
                  name:'leifer mendez',
                  avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label:'terminado',
        color:'Green',
        list:[
          {
            order:'Como instalar node',
            items:[
              {
                key:'price',
                value:100
              },
              {
                key:'time',
                value:152
              },
              {
                key:'author',
                value:{
                  name:'leifer mendez',
                  avatar:'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              },
            ]
          }
        ]
      }
    ]
    
  }

  ngOnDestroy(): void {
    console.log("me voy a destruir")
    this.listObservables$.forEach((subscriptions)=>subscriptions.unsubscribe())
  }
}
