import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Angular Fire
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Components
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";

// Services
import { AdminAuthGuardService } from "./services/admin-auth-guard.service";
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ReviewService } from "./services/reviews.service";
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { SeoService } from "./services/seo.service";
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  declarations: [ NavigationComponent, ContactComponent, FooterComponent, ProductCardComponent, ProductQuantityComponent ],
  imports: [CommonModule, RouterModule, NgbModule.forRoot(), ScrollToModule.forRoot(), DataTableModule],
  exports: [
    CommonModule,
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    NavigationComponent,
    ContactComponent,
    FooterComponent,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    DataTableModule
  ],
  providers: [
    AdminAuthGuardService,
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    SeoService,
    ReviewService,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ]
})
export class SharedModule {}