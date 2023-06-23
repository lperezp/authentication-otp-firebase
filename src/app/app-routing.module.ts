import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { VerificationComponent } from './pages/verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'verify',
    component: VerificationComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
