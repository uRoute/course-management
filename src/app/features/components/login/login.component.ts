import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../core/interfaces/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);
  private _ToastrService = inject(ToastrService);
  allUserData: User[] = [];

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  ngOnInit(): void {
    this._AuthService.getUserData().subscribe({
      next: (response) => {
        this.allUserData = response;
        console.log(this.allUserData);
      },
    });
  }

  submitLoginForm(login: FormGroup) {
    if (login.valid) {
      for (let i = 0; i < this.allUserData.length; i++) {
        if (
          this.allUserData[i].email == login.value.email &&
          this.allUserData[i].password == login.value.password
        ) {
          this._Router.navigate(['/home']);
          sessionStorage.setItem(
            'userData',
            JSON.stringify(this.allUserData[i]),
          );
          this._ToastrService.success('Login successful');
          

        }else{
          this._ToastrService.error('Invalid email or password');
        }
      }
    }
  }
}
