import { Component } from "@angular/core";

@Component({
  selector: "sc-footer",
  templateUrl: "./footer.component.html"
})
export class FooterComponent {
  date: number = Date.now()
}