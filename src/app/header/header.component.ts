import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userServ:UserService)
  {

  }

  ngOnInit(): void {
      
  }

  logOut()
  {

    this.userServ.logout();
  
  }

  isConnected()
  {
    return this.userServ.isConnected();
  }

  isAdmin()
  {
    this.userServ.isAdmin();
  }
}
