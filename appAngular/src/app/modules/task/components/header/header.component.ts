import { Component, OnInit } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Link',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(
    public testCourseService:TestCourseService){

  }

  ngOnInit(): void {
  }


}
