import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';
import { environement } from 'src/environements/environement';
import { authresponse } from '../models/authresponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  


  subjectOne = new BehaviorSubject(0);

  count=0;


  constructor(private hhtp: HttpClient) { 

    this.subjectOne.subscribe(


      (val)=>{
        this.count= val
      }

    )

  }

  incrimentCounter()
  {
    this.subjectOne.next(this.count+1);
  }

  getAllusers():Observable<user[]>
  {
    return this.hhtp.get<user[]>("http://localhost:3000/users")
  }
  getUserFromId(iduser: number):Observable<user> {

    return this.hhtp.get<user>("http://localhost:3000/users/"+iduser)
  //  throw new Error('Method not implemented.');
  }

  updateUser(id: number, usr: user):Observable<user> {

return this.hhtp.put<user>("http://localhost:3000/users/"+id,usr)
   // throw new Error('Method not implemented.');
  }
  
  deleteuser(id: number):Observable<user> {
     // throw new Error('Method not implemented.');

     return this.hhtp.delete<user>("http://localhost:3000/users/"+id);
  }
 
  /*adduser(usr:user):Observable<user>
  {
    return this.hhtp.post<user>(environement.host+"/users/",usr);
  }*/

  adduser(usr:user):Observable<authresponse>
  {
    return this.hhtp.post<authresponse>(environement.host+"/users/",usr);
  }

  saveuser(usr:user, accessToken:string)
  {
    sessionStorage.setItem("user",JSON.stringify(usr));
    sessionStorage.setItem("jwt",accessToken);
  }

  connectUser(email:string, password:string):Observable<authresponse>
  {
    console.log(email+"--------"+password)
    return this.hhtp.post<authresponse>(environement.host+"/login/",{email:email,password:password});
  }

  isConnected()
  {
    if(sessionStorage.getItem("jwt")!=null)
    return true ;
    else
    return false;
  }

  logout()
  {
    sessionStorage.clear();
  }
  isAdmin()
  {
    
    var usr:user= JSON.parse(sessionStorage.getItem("user")!);

    if(usr!=null)
    {
      return usr.role=='admin'
    }
    return false

  }
}
