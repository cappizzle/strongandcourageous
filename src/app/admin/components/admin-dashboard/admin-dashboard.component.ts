import { Component } from "@angular/core";

@Component({
  selector: "sc-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html"
})
export class AdminDashboardComponent {
  public productForm: boolean

  showProductForm = () => {
    this.productForm = !this.productForm
  }
}