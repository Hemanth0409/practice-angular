import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
