import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { AvatarModule } from 'primeng/avatar';
import { ShopComponent } from './shop/shop.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TimelineComponent,
    NavbarComponent,
    ShopComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    TimelineModule,AvatarModule,TableModule,AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
