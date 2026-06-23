import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);

  register:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    age: new FormControl(null,[Validators.required,Validators.min(16),Validators.max(80)]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  })


  submitRegisterForm(register:FormGroup){
    if(register.valid){
      this._AuthService.registerUser(register.value).subscribe({
        next:(response)=>{
          console.log(response);
          this._Router.navigate(['/login'])
        }
      })
    }
  }


}
