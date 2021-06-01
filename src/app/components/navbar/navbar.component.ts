import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean = false;
  isUser:boolean=false;
  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.as.user.subscribe(user=>{
      if(user){
         this.isUser=true
         this.as.userid=user.uid
         console.log("User is Here")
      }
      else  {
        this.isUser=false
        this.as.userid=''
        console.log("No User Here")
        //
      };
    })
  }

  toggeleNavbar()
  {
    this.isOpen=!this.isOpen
  }
  logout(){
return this.as.logout().then(()=>console.log("out"))
  }
}
