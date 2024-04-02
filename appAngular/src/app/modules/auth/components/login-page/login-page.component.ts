import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  
  loginForm:FormGroup = new FormGroup({});

  constructor(){this.loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })}

  
}
