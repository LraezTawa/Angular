import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { CookieModule, CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
          idColaborador: new FormControl(0,[Validators.required]),
          password: new FormControl('',[Validators.required,
             Validators.minLength(5),
             Validators.maxLength(12)])
      }
    )

  }

  sendCredentials():void{
    
    const body = this.loginForm.value;
    console.log(body)

    this.authService.submitLogin(body)
    .subscribe((response) => {
      console.log(response)
      const{result}=response;
      this.cookieService.put('result',result,{
        path:'/'
      })
      this.router.navigate(['','task'])
    })
    
  }

}
