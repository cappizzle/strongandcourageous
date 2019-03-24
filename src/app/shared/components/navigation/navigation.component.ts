import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser"

@Component({
  selector: "sc-nav",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent {
  public navClass: string = "navbar navbar-expand-lg navbar-light fixed-top"
  constructor(
    @Inject(DOCUMENT) private document: any,
  ){
    
  }

  public isNavbarCollapsed = true;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    if( this.document.documentElement.scrollTop <= 100 ) this.navClass = "navbar navbar-expand-lg navbar-light fixed-top"
    else this.navClass = "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
  }
}