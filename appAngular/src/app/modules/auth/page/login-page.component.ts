import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm:FormGroup = new FormGroup({});

  constructor(){
    
    this.loginForm=new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
      }
  
  
  )


}

sendCredentials():void{
  const body = this.loginForm.value;
  // this.authService.submitLogin(body)
  // .subscribe((response) => {
  //   this.router.navigate(['/','task'])
  // })
  console.log(body)
}
  
}
