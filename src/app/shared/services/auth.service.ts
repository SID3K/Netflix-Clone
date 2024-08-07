declare var google:any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  
  constructor() { }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['/']);
  }
}
