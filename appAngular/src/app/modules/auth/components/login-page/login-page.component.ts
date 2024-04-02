import { Component } from '@angular/core';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  value='hola mundo feo'
  constructor(private replaceSpace:ReplaceSpacePipe){this.value= replaceSpace.transform(this.value,'ay')}

  
}
