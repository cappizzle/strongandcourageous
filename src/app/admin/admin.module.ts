import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router"

import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminSideNavComponent } from "./components/admin-sidenav/admin-sidenav.component";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,    
    AdminSideNavComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,    
    AdminSideNavComponent
  ]
})
export class AdminModule {}