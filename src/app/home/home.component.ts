import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

test="test interpolation";

pb="background-color: red;"

propBind="background-color: blue;"
twoWaybinding="aaa";
ngm="test two way binding";

tabchaine=['aa','bb']

counter=0;
  constructor(private userserv:UserService)
  {

  }

  ngOnInit(): void {
      
  }

  incrimnter()
  {
    this.userserv.incrimentCounter();
    this.counter=this.userserv.count;
  }

}
