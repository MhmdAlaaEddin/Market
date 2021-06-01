import { BuiltinType } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/good.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
 goods:Good[]=[]
 goodsObservable!:Subscription

 add:number = -1
 //goodsObservable:Subscription
  constructor(private router:Router,private as:AuthService,private gs:GoodsService , private cs:CartService ) { }

  ngOnInit(): void {
    
    this.gs.getAllGoods().subscribe(data=>{
     this.goods= data.map(element=>{
        return {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  ngOnDestroy(){
 // this.goodsObservable.unsubscribe()
  }
addToCard(index:any)
{
  if(this.as.userid)
  this.add=index
  else
  this.router.navigate(['/login'])

}
buy(amount:number){
let selectedGood= this.goods[this.add]
let data = {
  name:selectedGood.name,
  amount : amount,
  price: selectedGood.price,
  total:amount*selectedGood.price
}
this.cs.addToCart(data).then(()=>this.add=-1)
}
}
