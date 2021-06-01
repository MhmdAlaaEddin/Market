import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(private gs:GoodsService) { }

@ViewChild('image') image!:ElementRef

  ngOnInit(): void {
  }
  addNewGood(f:any){
    let name = f.value.name,
    price = f.value.price
  ,image=this.image.nativeElement.files[0];
this.gs.addNewGood(name,price,image)  
  }
}
