import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { SeoService } from "../../../shared/services/seo.service";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html'
})
export class MyOrdersComponent implements OnInit {
  orders$: any = {};

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private seo: SeoService
  ) {
    this.orders$ = authService.user$.pipe(
      switchMap(u => orderService.getOrdersByUser(u.uid))
    );
  }

  ngOnInit = () => {
    this.seo.generateTags({ title: "My Orders" })
  }
}