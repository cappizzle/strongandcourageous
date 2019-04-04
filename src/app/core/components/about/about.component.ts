import { Component, OnInit } from "@angular/core";

import { SeoService } from "../../../shared/services/seo.service"

@Component({
  selector: "sc-about",
  templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService){}

  ngOnInit(){
    this.seo.generateTags({
      title: "Strong and Courageous - About" 
    })
  }
}