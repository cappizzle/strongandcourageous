import { Component } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html'
})
export class AdminOrdersComponent {
  orders$;
  constructor(private orderService: OrderService) {
    this.orders$ = this.orderService.getOrders();
  }
}