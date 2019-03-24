import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Components
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component";

// Services
import { SeoService } from "./services/seo.service";

@NgModule({
  declarations: [ NavigationComponent, ContactComponent, FooterComponent ],
  imports: [CommonModule, RouterModule, NgbModule.forRoot(), ScrollToModule.forRoot()],
  exports: [
    CommonModule,
    FormsModule,
    NavigationComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [
    SeoService
  ]
})
export class SharedModule {}