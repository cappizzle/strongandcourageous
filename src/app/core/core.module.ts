import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module"; 
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



import { HomeComponent } from "./components/home/home.component";
import { AmbassadorsComponent } from "./components/ambassadors/ambassadors.component"

@NgModule({
  declarations: [ HomeComponent, AmbassadorsComponent ],
  imports: [CommonModule, RouterModule, SharedModule, ScrollToModule.forRoot() ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class CoreModule {}