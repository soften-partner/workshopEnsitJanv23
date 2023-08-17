import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  inputform!: FormGroup;
 test!:string;
  constructor(private fb:FormBuilder , private route:Router, private userServ:UserService)
  {

  }
  ngOnInit(): void {
    
    this.inputform= this.fb.group(

      {"inputemail":["", [Validators.required, Validators.email]],
        "inputpassword":["", Validators.required]
    }

    )
    
  }

  onsubmitLogin()
  {
    console.log("bonjour !!!!");

    console.log(this.inputform);

    console.log(this.inputform.valid+"------------------------");

    if(!this.inputform.valid)
    {
      this.test="testvalid"
    }
    else{

      this.userServ.connectUser(this.inputform.controls['inputemail'].value, this.inputform.controls['inputpassword'].value).subscribe(

        (authResp)=>{

          this.userServ.saveuser(authResp.user, authResp.accessToken)

        }

      )

      this.route.navigate(['/home'])
    }

    console.log(this.inputform.pristine)
    console.log(this.inputform.controls['inputemail'].errors)
    if(this.inputform.controls['inputemail'].errors)
    {
      console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee there is an error !!!!!! ");
    }
    else{
      console.log("email valid !!!!!! ");
    }
  }
 
}
