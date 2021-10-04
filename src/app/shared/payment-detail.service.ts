import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = 'http://localhost:25580/api/PaymentDetail';//看開發的PORT號是多少就給多少
  list: PaymentDetail[] = [];
  //Submit
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData)
  }
  //Update
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData)
  }
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
