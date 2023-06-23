import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  auth: Auth = inject(Auth);
  user: any;
  number: string = '';

  constructor(private route: Router) {
    this.user = JSON.parse(localStorage.getItem('dataUser') || '');
    console.log('user', this.user);
    this.number = this.user.phoneNumber;
  }


  logOut() {
    signOut(this.auth).then(() => {
      this.route.navigate(['/']);
      localStorage.clear();
    })
  }
}
