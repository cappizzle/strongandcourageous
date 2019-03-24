import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Angular Fire
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Modules
import { SharedModule } from "../shared/shared.module";

// Components
import { ProductsComponent } from "./components/products/products.component";


@NgModule({
  declarations: [ ProductsComponent ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ]
})
export class StoreModule {}