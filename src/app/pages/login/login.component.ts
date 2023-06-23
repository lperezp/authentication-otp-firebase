import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, RecaptchaVerifier, signInWithPhoneNumber } from '@angular/fire/auth';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: Auth = inject(Auth);
  phone: string = '';
  verificationCode: string = '';
  windowRef: any;
  user: any;

  constructor(private route: Router, private win: WindowService) { }
  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
    }, this.auth);
  }

  login() {
    signInWithPhoneNumber(this.auth, '+51' + this.phone, this.windowRef.recaptchaVerifier)
      .then((confirmationResult) => {
        const verificationId = confirmationResult.verificationId;
        localStorage.setItem('verificationId', verificationId);
        this.route.navigate(['/verify'])
      }).catch((error) => {
        alert(error);
      });
  }
}
