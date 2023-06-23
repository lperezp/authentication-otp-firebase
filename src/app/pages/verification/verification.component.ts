import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, PhoneAuthProvider, signInWithCredential } from '@angular/fire/auth';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  auth: Auth = inject(Auth);
  verify: string = '';
  verifyCode: string = '';
  constructor(private route: Router) { }

  ngOnInit() {
    this.verify = localStorage.getItem('verificationId') || '';
  }

  validateCode() {
    const credentials = PhoneAuthProvider.credential(this.verify, this.verifyCode);
    signInWithCredential(this.auth, credentials)
      .then((response) => {
        localStorage.setItem('dataUser', JSON.stringify(response.user))
        this.route.navigate(['/main'])
      }).catch((error) => {
        alert(error);
      })
  }
}
