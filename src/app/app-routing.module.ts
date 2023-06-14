import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Table } from 'primeng/table';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  {
    path:'sidebar',component:SidebarComponent
  },{
    path:"shop",component:ShopComponent
  },
  {
    path:"table",component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
