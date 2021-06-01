import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'

import {AngularFireModule} from '@angular/fire'
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuth,AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFireStorage,AngularFireStorageModule} from '@angular/fire/storage'
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    GoodsComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyARw0n12IcXwwKPB1oN9CKgYXJgtIQPC60",
      authDomain: "market-37e32.firebaseapp.com",
      projectId: "market-37e32",
      storageBucket: "market-37e32.appspot.com",
      messagingSenderId: "897452239251",
      appId: "1:897452239251:web:1e8c6cee6da2a30c076066",
      measurementId: "G-MYNF6VTY69"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
