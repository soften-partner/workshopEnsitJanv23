import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"signin", component:SigninComponent},
{path:"signup", component:SignupComponent},
{path:"listusers", component:ListusersComponent},
{path:"updateuser/:iduser", component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
