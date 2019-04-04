import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module"; 
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { HomeComponent } from "./components/home/home.component";
import { AmbassadorsComponent } from "./components/ambassadors/ambassadors.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [ HomeComponent, AmbassadorsComponent, LoginComponent, AboutComponent ],
  imports: [CommonModule, RouterModule, SharedModule, ScrollToModule.forRoot() ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class CoreModule {}