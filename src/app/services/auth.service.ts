import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!:Observable<any>;
  userid:string='';

  constructor(private afAuth:AngularFireAuth) {
    this.user=afAuth.user;
   }

  signup(email:any,password:any){
return this.afAuth.createUserWithEmailAndPassword(email,password)
}

  login(email:any,password:any)
  {
 return this.afAuth.signInWithEmailAndPassword(email,password)
  }

 logout()
 {
  return this.afAuth.signOut()
 }
}
