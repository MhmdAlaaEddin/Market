import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Good } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

 
  constructor(private fs:AngularFirestore , private storge:AngularFireStorage) { }
getAllGoods()
{
  return this.fs.collection<Good>('goods').snapshotChanges()
}
addNewGood(name:string,price:number,image:File)
{
return new Promise((res,rej)=>{
  let ref = this.storge.ref('goods/'+image.name)
ref.put(image).then(()=>{
  ref.getDownloadURL().subscribe(photoUrl=>{
    this.fs.collection('goods').add({
      name,
      price,
      photoUrl
    }).then(()=>res("Message"))
  })
})
})
}
}
