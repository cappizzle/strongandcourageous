import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from "./core/components/home/home.component"
import { ProductsComponent } from "./store/components/products/products.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
