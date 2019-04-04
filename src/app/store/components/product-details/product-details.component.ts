import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../shared/services/product.service";
import { SeoService } from "../../../shared/services/seo.service";
import { ReviewService } from "../../../shared/services/reviews.service";

@Component({
  selector: "product-details",
  templateUrl: "./product-details.component.html"
})
export class ProductDetails implements OnInit {
  product: any = {}
  productId: string

  reviews: any[]

  leaveReview: boolean

  constructor(private productService: ProductService, private route: ActivatedRoute, private seo: SeoService, private review: ReviewService){}

  async ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      this.productId = param.get('product')
      this.productService.getSlug(this.productId).subscribe(prod => {
        this.product = prod[0]
        this.review.getReviews(this.productId).subscribe(reviews => {
          console.log(reviews)
          this.reviews = reviews
        })
        this.seo.generateTags({
          title: this.product.title,
          image: this.product.imageUrl 
        })
      })
    })    
  }

  reviewProduct() {
    this.leaveReview = !this.leaveReview
  }

  save(review) {
    let date = Date.now()
    review.date = date
    review.associatedProduct = this.productId
    this.review.create(review)
    this.reviewProduct()
  }
}