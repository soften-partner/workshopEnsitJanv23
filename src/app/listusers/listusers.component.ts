import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent  implements OnInit{

  userTab:user[]=[];
  constructor(private userServ:UserService, private route:Router)
  {

  }

  ngOnInit(): void {
      
    this.userServ.getAllusers().subscribe(

      (tab)=>{

        this.userTab=tab;
        console.log(this.userTab.length)
       console.log(this.userTab[0].firstname)
     //  console.log(this.userTab.forEach(console.log));
      }
    )

    
  }

  updateuser(iduser:number)
  {
    console.log(iduser)
      this.route.navigate(['/updateuser',iduser]);
  }

  deleteuser(id:number)
  {
    this.userServ.deleteuser(id).subscribe(

      (usr)=>{

        this.userServ.getAllusers().subscribe(

          (listusr)=>{

            this.userTab= listusr;
          }
        )

      }
    )

    this.route.navigate(['/listusers'])
  }
}
