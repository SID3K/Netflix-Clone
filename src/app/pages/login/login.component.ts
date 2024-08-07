declare var google:any;

import { Component, NgZone, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  // constructor(private router:Router){}
  //new way
  private router = inject(Router);
  private ngZone = inject(NgZone);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'789034556824-2brgne032fflpj48urn2if833qf99dak.apps.googleusercontent.com',
      callback: (resp:any)=>{
        this.handleLogin(resp);
      } 
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300
    }); 
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));  //we have 3 fields in JWT header, payload and one more. we need payload so accessing second index which 1
  }

  handleLogin(response:any){
    if(response){
      //decode the token
      const payload = this.decodeToken(response.credential)
      //store in session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      //navigate to home/browse
      this.ngZone.run(() => {
        this.router.navigate(['/browse']);
      });
      // this.router.navigate(['browse']);
    }
  }

}
