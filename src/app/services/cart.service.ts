import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../interfaces/good.interface';
import { Shopping } from '../interfaces/shopping.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private as:AuthService,private fs:AngularFirestore) { }

  addToCart(data:any)
  {
return this.fs.collection(`users/${this.as.userid}/cart`)
.add(data)
  }

  getCart()
  {
    return this.fs.collection<Shopping>(`users/${this.as.userid}/cart`).snapshotChanges()

  }
  delete(id:any)
  {
    return this.fs.doc(`users/${this.as.userid}/cart/${id}`).delete()
  }
  save(id:any,amount:number)
  {
    return this.fs.doc(`users/${this.as.userid}/cart/${id}`).update({amount})

  }
}
