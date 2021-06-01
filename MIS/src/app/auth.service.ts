import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : Observable<User>;

  constructor(public auth: AngularFireAuth) {
    this.user = this.auth.user
      .pipe(map(user => {
          return {
            email: user.email,
          }
      }))
  }

  signOut() {
    this.auth.signOut();
  }

  signInWithEmailAndPassword(email: any, password: any) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

}

export class User 
{
  public email: string;
}