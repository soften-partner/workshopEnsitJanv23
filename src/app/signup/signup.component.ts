import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  inputForm!: FormGroup
 usr!: user;
  constructor(private fb : FormBuilder, private userServ: UserService, private route: Router )
  {
      
  }

  ngOnInit(): void {
    this.inputForm= this.fb.group(
      {
        "fname":[""],
        "lname":[""],
        "username":[""],
        "password":["",Validators.required],
        "email":["",[Validators.required, Validators.email]],
        "addresse":[""]

      }
    )
  }

  onSubmit()
  {
    console.log(this.inputForm)
    //console.log(this.inputForm)

   this.usr=new user (); 

   this.usr.firstname=this.inputForm.controls['fname'].value;
   this.usr.lastname=this.inputForm.controls['lname'].value;
   this.usr.username=this.inputForm.controls['username'].value;
   this.usr.password=this.inputForm.controls['password'].value;
   this.usr.email=this.inputForm.controls['email'].value;
   this.usr.addresse=this.inputForm.controls['addresse'].value;

   this.userServ.adduser(this.usr).subscribe(

    (userAdded)=>{

      // first_test  console.log("fname of user added ===>:" +userAdded.firstname)

        console.log("fname of user added ===>:" +userAdded.user.firstname)
        console.log("Access token  ===>:" +userAdded.accessToken)


        this.route.navigate(['/listusers'])
    }
   )
  
  }
}
