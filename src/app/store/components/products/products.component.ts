import { Component, OnInit } from "@angular/core";
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: "sc-shop",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit {
  constructor(private seo: SeoService){}

  ngOnInit(){
    this.seo.generateTags({
      title: "Strong and Courageous - Shop"
    })
  }

  public products: any[] = [
    {
      title: "Title 1",
      sub: "Sub Title 1",
      img: "https://via.placeholder.com/350",
      alt: "Alt Text",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas pretium ipsum. Curabitur eu nulla et purus fringilla lacinia. Nunc eleifend eget nisi id sollicitudin. In laoreet et massa nec semper. Proin vitae consequat sapien. Praesent bibendum, turpis at ornare posuere, lacus augue fringilla est, eget lacinia neque libero at lacus. Phasellus elementum nulla et velit porta euismod. Maecenas finibus urna at nisl rhoncus pharetra. Sed non ultricies felis. Pellentesque bibendum, dui et efficitur laoreet, ligula magna luctus nisi, in imperdiet dui nibh sed metus."
    },
    {
      title: "Title 2",
      sub: "Sub Title 2",
      img: "https://via.placeholder.com/350",
      alt: "Alt Text",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas pretium ipsum. Curabitur eu nulla et purus fringilla lacinia. Nunc eleifend eget nisi id sollicitudin. In laoreet et massa nec semper. Proin vitae consequat sapien. Praesent bibendum, turpis at ornare posuere, lacus augue fringilla est, eget lacinia neque libero at lacus. Phasellus elementum nulla et velit porta euismod. Maecenas finibus urna at nisl rhoncus pharetra. Sed non ultricies felis. Pellentesque bibendum, dui et efficitur laoreet, ligula magna luctus nisi, in imperdiet dui nibh sed metus."
    },
    {
      title: "Title 3",
      sub: "Sub Title 3",
      img: "https://via.placeholder.com/350",
      alt: "Alt Text",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas pretium ipsum. Curabitur eu nulla et purus fringilla lacinia. Nunc eleifend eget nisi id sollicitudin. In laoreet et massa nec semper. Proin vitae consequat sapien. Praesent bibendum, turpis at ornare posuere, lacus augue fringilla est, eget lacinia neque libero at lacus. Phasellus elementum nulla et velit porta euismod. Maecenas finibus urna at nisl rhoncus pharetra. Sed non ultricies felis. Pellentesque bibendum, dui et efficitur laoreet, ligula magna luctus nisi, in imperdiet dui nibh sed metus."
    }
  ]
}