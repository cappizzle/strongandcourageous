import { Component } from "@angular/core";

@Component({
  selector: "sc-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html"
})
export class AdminDashboardComponent {
  private productForm: boolean

  private showProductForm = () => {
    this.productForm = !this.productForm
  }
}