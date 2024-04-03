import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
        aboutMe: new FormControl('',[Validators.required, Validators.minLength(3)]),
        password: new FormControl('',[Validators.required, Validators.minLength(3)]),
        passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(3)])

       },
      {
        validators:passwordMatchValidator
      }
    )

    function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
      const valuePassword = formCurrent.get('password')?.value;
      const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
      return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
    }
  }
}
