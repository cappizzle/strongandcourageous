import { Component, OnInit } from "@angular/core";
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: "sc-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService){}

  ngOnInit(){
    this.seo.generateTags({
      title: "Strong and Courageous - Home" 
    })
  }

  public faith: string = `Faith and trust in God is the cornerstone of Strong and Courageous. Without this, we have nothing.
  The fundamental fact of existence is that this trust in God, this faith, is the firm foundation under everything that makes life worth living. It’s our handle on what we can’t see.
  The act of faith is what distinguished our ancestors, set them above the crowd. By faith, we see the world called into existence by God’s word, what we see created by what we don’t see.`

  public strength: string = `We are fully invested in developing physical and sprititual strength to prove everyone has the ability to overcome obsticles.`

  public unity: string = `At our core, we stand to unite the community by bringing together people from all walks of life. We are dedicated to forming strong and lasting bonds with our neighbors and pledge to serve those we are called to assist.`

  public love: string = `Love is one of the more difficult acts to carry out and we are commanded to love one another. The Strong and Courageous shows our love in many
  ways by: showing kindness, humbly helping and serving others, physical and emotional support, mourning and rejoice, encouragement, and most importantly -- prayer.`
}