import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthTestService } from '@modules/auth/service/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  //registerForm:FormGroup = new FormGroup({});
  constructor(private authService:AuthTestService){
    const formControlPhone = this.registerForm.get('phone') as FormControl;
    formControlPhone.valueChanges.subscribe((res)=>{
      console.log('ok ok ok', res)
    })

    this.registerForm.valueChanges.subscribe((res)=>{
      console.log('ok ok ok', res)
    })//nota en consola como regustra todos los cambios
  }
  
    registerForm = new FormGroup(
      {
        email: new FormControl('',{
          validators:[Validators.required, Validators.email],
          asyncValidators:this.authService.uniqueEmailValidator()//,si se deja así, por defecto carga aunque aún se esté editando la seleccion
          //updateOn:'blur' este es un disparador, implica que cuando sale del formulario carga la accion asignada en lugar de hacerlo de inmediato
        }),
        name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
        password: new FormControl('',[Validators.required, Validators.minLength(3)]),
        passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(3)])

       },
      {
        validators:passwordMatchValidator
      }
    )

    

    sendCredentials():void{
      console.log('body')
      const body = this.registerForm.value
            // this.authService.submitLogin(body)
      // .subscribe((response) => {
      //   this.router.navigate(['/','task'])
      // })
      console.log(body)
    }


    testLoaded():void{

      const mockData={
        email:'test@test.com',
        name:'Luis',
        lastName:'Raez',
        phone:'984127016',
        password:'1234d',
        passwordConfirm:'1234d'
      }
      this.registerForm.setValue(mockData)
    }

    testUpdate():void{

      const mockData={
        email:'segundotest@test.com',
        phone:'111111111',
      }
      this.registerForm.patchValue(mockData)
    }

    
    
}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
}

