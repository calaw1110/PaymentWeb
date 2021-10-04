import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('確定要刪除嗎?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted Successfully", "Payment Detail Deleted");
          },
          err => {
            console.log(err);
          }
        )
    }
  }
}
