import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, input, InputSignal, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  private _Router = inject(Router)
  check: InputSignal<boolean> = input(false);

  logout(){
    if(isPlatformBrowser(this.platformId)){
      sessionStorage.removeItem('userData')
      this._Router.navigate(['/login'])
    }
  }

}
