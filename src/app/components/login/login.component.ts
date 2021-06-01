import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { couldStartTrivia } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

errorMessage:string='';
  
  constructor(private as:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  login(f:any){
    let data =f.value
    this.as.login(data.email,data.password)
    .then(res=>{
this.errorMessage=''
this.router.navigate(['/'])
    })
    .catch(err=>this.errorMessage=err)
   }
}
