import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [ HomeComponent ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class CoreModule {}