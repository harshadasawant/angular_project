import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path : 'about',
    children:[
      {path:'company',component:AboutcompanyComponent},
      {path:'me',component:AboutmeComponent},

    ]
  },
  {
    component: HomeComponent,
    path : ''
  },
  {
    component: LoginComponent,
    path:'login/:id'
  },
  {
    component: NopageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
