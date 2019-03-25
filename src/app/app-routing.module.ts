import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from "./core/components/home/home.component"
import { ProductsComponent } from "./store/components/products/products.component"
import { AmbassadorsComponent } from "./core/components/ambassadors/ambassadors.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: ProductsComponent },
  { path: "ambassadors", component: AmbassadorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
