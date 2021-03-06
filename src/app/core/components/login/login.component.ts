import { Component } from "@angular/core"
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "sc-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  constructor(
    private auth: AuthService
  ){}

  login = () => {
    this.auth.login()
  }
}