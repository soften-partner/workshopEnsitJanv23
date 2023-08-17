import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { user } from '../models/user.model';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  iduser!:number;
  inputForm!:FormGroup
  constructor(private actrouter:ActivatedRoute, private userServ:UserService, private fb:FormBuilder)
{

}
ngOnInit(): void {

this.inputForm=this.fb.group(

  { 
    "fname": [""],
    "lname":[""],
    "username":[""],
    "password":[""],
    "email":[""],
    "addresse":[""]

  
  }

)

  this.actrouter.params.subscribe(

    (param)=>{

      this.iduser=param['iduser'];
      console.log("test param:"+param['iduser'])

      this.userServ.getUserFromId(this.iduser).subscribe(

        (usr)=>{

          console.log(usr.lastname)
          this.inputForm.controls['fname'].setValue(usr.firstname);
          this.inputForm.controls['lname'].setValue(usr.lastname);
          this.inputForm.controls['username'].setValue(usr.username);
          this.inputForm.controls['password'].setValue(usr.password);
          this.inputForm.controls['addresse'].setValue(usr.addresse);

        }
      );
 

    }

  )
 // console.log(this.actrouter.params[''])
    
}

onSubmitUpdate()
{
  console.log("id for update: "+ this.iduser)

  let usr = new user();

  usr.firstname= this.inputForm.controls['fname'].value;
  usr.lastname= this.inputForm.controls['lname'].value;
  usr.username= this.inputForm.controls['username'].value;
  usr.password= this.inputForm.controls['password'].value;
  usr.addresse= this.inputForm.controls['addresse'].value;

  console.log("test putting user attributes " +usr.firstname)


  this.userServ.updateUser(this.iduser,usr).subscribe(
    (u)=>
    {
      console.log("firstname after update"+u.firstname)
    }
  )
}
}
