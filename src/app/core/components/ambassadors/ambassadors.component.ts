import { Component, OnInit } from "@angular/core";
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: "sc-ambassadors",
  templateUrl: "./ambassadors.component.html"
})
export class AmbassadorsComponent implements OnInit {
  constructor(
    private seo: SeoService
  ){}

  ngOnInit(){
    this.seo.generateTags({
      title: "Strong and Courageous - Ambassadors" 
    })
  }

  public ambassadors: any[] = [
    {
      name: "Lauren Engle",
      image: "assets/images/LaurenEngle.jpeg",
      imageAlt: "Lauren Engle",
      bio: ""
    },
    {
      name: "John Waller",
      image: "",
      imageAlt: "",
      bio: ""
    }
  ]

  public getImage(i): object{
    return {"background-image": "url("+this.ambassadors[i].image+")"}
  }
}