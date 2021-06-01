import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: any = {};

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.form.email, this.form.password);
    this.form = {};
  }

  logout(){
    this.auth.signOut();
  }

}
