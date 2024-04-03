import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm:FormGroup = new FormGroup({});

  constructor() { 
    this.registerForm = new FormGroup(
      {
        email: new FormControl('',{
          validators:[Validators.required, Validators.email],
          //asyncValidators:this.authService.uniqueEmailValidator(),
          updateOn:'blur'
        }),
        name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
        aboutMe: new FormControl('',[Validators.required, Validators.minLength(3)])
       }//,
      // {
      //   validators:passwordMatchValidator
      // }
    )
  }
}
