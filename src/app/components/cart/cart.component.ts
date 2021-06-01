import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/interfaces/shopping.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Shopping[]=[]
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart=>{
       this.cart=cart.map(shopping=>{
         return {
           id:shopping.payload.doc.id
           ,...shopping.payload.doc.data()
         }
       })
    })
  }
  delete(i:any){
    this.cs.delete(this.cart[i].id)
  }
  save(i:any){
this.cs.save(this.cart[i].id,this.cart[i].amount)

  }
}
