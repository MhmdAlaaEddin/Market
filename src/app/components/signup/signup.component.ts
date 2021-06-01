import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage:string='';
  constructor(private router:Router,private as:AuthService , private us:UserService) { }

  ngOnInit(): void {
  }
  signup(f:any){
    let data:User = f.value;
    /*console.log(f.value)
    console.log(data)
    console.log(data.email)*/
   this.as.signup(data.email,data.password)
    .then(res=>{
      this.errorMessage='';
      this.us.addNewUser(res.user?.uid,data.name,data.address)
      .then(()=>{
        this.router.navigate(['/'])
      })
    })
    .catch(err=>{
      this.errorMessage=err.message
    })  
  }
}
