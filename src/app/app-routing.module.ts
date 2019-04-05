import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthGuardService } from "./shared/services/auth-guard.service"
import { AdminAuthGuardService } from "./shared/services/admin-auth-guard.service"

// Components
import { HomeComponent } from "./core/components/home/home.component"
import { ProductsComponent } from "./store/components/products/products.component"
import { AmbassadorsComponent } from "./core/components/ambassadors/ambassadors.component";
import { AboutComponent } from './core/components/about/about.component';

import { LoginComponent } from "./core/components/login/login.component"

// Shopping Components
import { CheckOutComponent } from "./store/components/check-out/check-out.component"
import { MyOrdersComponent } from "./store/components/my-orders/my-orders.component"
import { OrderSuccessComponent } from "./store/components/order-success/order-success.component"
import { ProductDetails } from './store/components/product-details/product-details.component';
import { ShoppingCartComponent } from './store/components/shopping-cart/shopping-cart.component';
import { ShippingFormComponent } from "./store/components/shipping-form/shipping-form.component";

// Admin Components
import { AdminOrdersComponent } from "./admin/components/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./admin/components/admin-products/admin-products.component";
import { ProductFormComponent } from "./admin/components/product-form/product-form.component";
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: ProductsComponent },
  { path: "ambassadors", component: AmbassadorsComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  {
    path: "order-success",
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "shipping-form",
    component: ShippingFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "check-out",
    component: CheckOutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "my-orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  },
  { path: "product-details", component: ProductDetails },
  { path: "shopping-cart", component: ShoppingCartComponent },
  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AdminAuthGuardService, AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
