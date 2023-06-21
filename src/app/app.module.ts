import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline/timeline.component';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ShopComponent } from './shop/shop.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './home/home.component';
import { Task4Component } from './task4/task4.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsComponent } from './forms/forms.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TimelineComponent,
    NavbarComponent,
    ShopComponent,
    TableComponent,
    HomeComponent,
    Task4Component,
    ParentComponent,
    ChildComponent,
    FormsComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,HttpClientModule,
    CardModule,FormsModule,
    TimelineModule,AvatarModule,TableModule,AccordionModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
