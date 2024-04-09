import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor(
    private testCourseService:TestCourseService
  ) { }
  
  sendData():void{
    this.testCourseService.setData('Hola desde card 😉')
    console.log('envioalheader')
  }
}
