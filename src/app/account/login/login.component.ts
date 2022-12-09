import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AccountserviceService} from '../accountservice.service';
import {Userloginfo} from '../userloginfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup;
  datasaved:boolean = false;
  message: string = '';
  status:string = '';
 
  constructor(public router:Router ,private formbuilder: FormBuilder, private accountservice: AccountserviceService) 
  {
    if(localStorage.getItem('Loginuser')){
      router.navigate(['/']);
    }
   }
 
  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    let userinfo = this.loginForm.value;
      this.userLogin(userinfo);
      this.loginForm.reset();
  }
  userLogin(logininfo:Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe(
      (data:any) => {
       let resp=JSON.stringify(data);
       console.log(resp);
        this.datasaved = true;
        this.message = data['msg'];
        this.status = data['status'];
        if(data['status']=='success'){
        localStorage.setItem('Loginuser',resp)
        }else{
          localStorage.removeItem('Loginuser');
          // this.router.navigate(['/login']);
        }
       this.loginForm.reset();
       if(this.status=='success'){
        this.router.navigate(['/']);
      }
      }
      
    )
  }
 
}
