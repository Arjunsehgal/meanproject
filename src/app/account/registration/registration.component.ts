import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // regForm : FormGroup = new FormGroup();
  regForm !: FormGroup;
  datasaved:boolean = false;
  dataerror:boolean = false;
  message: string = ''; 
  error:string = '';

  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      Name: ['', [Validators.required,Validators.minLength(3)]],
      Email: ['', [Validators.required,Validators.email]],
      Password: ['', [Validators.required,Validators.minLength(6)]]
    })
  }

  get Password() { 
    return this.regForm.controls['Password']; 
  }

  // onSubmit1(val:any){
  //   let userinfo = val;
  // }
  onSubmit(): void {
    let userinfo = this.regForm.value;
    console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      (data:any) => {
        if(!data['err']){
          console.log(data);
          this.datasaved = true;
          this.dataerror = false;
          alert("Data Added SuccessFully! 🎉🎊");
          this.message = data['msg'] //+ data['results']['name'];
         this.regForm.reset();
        }
        else{
          console.log(data);
          this.datasaved = false;
          this.dataerror = true;
          alert("Please Fill All The Details Carefully! 😡");
          this.error = data['err'];
         this.regForm.reset();
        }
        
      }
    )
  }


}
 
