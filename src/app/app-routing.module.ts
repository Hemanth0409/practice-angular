import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Task4Component } from './task4/task4.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormsComponent } from './forms/forms.component';
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
  {
    path:"task4",component:Task4Component
  },{
    path:"parent",component:ParentComponent
  },
  {
    path:"forms",component:FormsComponent
  },
  {
    path:"forms-react",component:FormReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
