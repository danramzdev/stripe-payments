import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  constructor(private http: HttpClient) {

  }


  createBuyCourseCheckoutSession(courseId:string) {
    return this.http.post('/api/checkout', {courseId});
  }

}
