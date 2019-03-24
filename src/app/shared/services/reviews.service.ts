import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private db: AngularFireDatabase){}

  create(review){
    this.db.list('/reviews').push(review)
  }

  getReviews<T>(item) {
    return this.db.list<T>('/reviews', ref => ref.orderByChild('associatedProduct').equalTo(item)).valueChanges()
  }
}