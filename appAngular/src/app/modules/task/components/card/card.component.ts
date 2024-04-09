import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked{
  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor( private render2:Renderer2 ) { }
  
  ngOnInit(): void{
    interval(1000).subscribe(()=>{
      this.idOrder=Date.now()
    })
  }

  ngAfterViewInit():void{
    //esto no se puede aplicar en el onInit porque primero debe renderizarse, es decir, debe existir
    const elemntTitle =this.elementRefId.nativeElement;
    this.render2.setStyle(elemntTitle,'color','red')
  }

  ngAfterViewChecked(): void {
    //se ejecuta cada vez que cambien las cosas
    console.log('hola mundossss')
    
  }

  // sendData():void{
  //   this.testCourseService.setData('Hola desde card 😉')
  // }
}
