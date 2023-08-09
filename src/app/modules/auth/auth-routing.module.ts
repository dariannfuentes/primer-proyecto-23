import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
<<<<<<< HEAD
  },{
=======
  },
  {
>>>>>>> 55ae6e88ea48852fd72129bc901ee7812a17173b
    path:"register",component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
