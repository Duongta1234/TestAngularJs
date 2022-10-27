import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
 // fully resolved filename; defined at module load time

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
   loginForm! : NgForm;
   email : string = '';
   password : string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      console.log("Invalid Data");
      return ;
    }
  console.log(this.loginForm.value)
   }

}
