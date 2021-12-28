import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { RedElDirective } from './red-el.directive';
import { FooterComponent } from './footer/footer.component'; //2nd import u r module
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { InlinetemplateComponent } from './inlinetemplate/inlinetemplate.component';
import { InlinestyletemplateComponent } from './inlinestyletemplate/inlinestyletemplate.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedElDirective,
    FooterComponent,
    Comp1Component,
    HomeComponent,
    AboutComponent,
    NopageComponent,
    AboutcompanyComponent,
    AboutmeComponent,
    InlinestyleComponent,
    InlinetemplateComponent,
    InlinestyletemplateComponent,
    PropertybindingComponent,
    ParentComponent,
    ChildComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule, //3rd need to import 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
