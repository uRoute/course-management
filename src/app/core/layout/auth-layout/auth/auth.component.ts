import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../../shared/components/nav/nav.component';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
