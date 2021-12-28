import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsdInrPipe } from './usd-inr.pipe';
import { UsdInr1Pipe } from './usd-inr1.pipe';



@NgModule({
  declarations: [
    LoginComponent,
    UsdInrPipe,
    UsdInr1Pipe
  ],
  imports: [
    CommonModule
  ],
  // 1st export u r component
  exports:[
    LoginComponent
  ]
})
export class UsersModule { }
