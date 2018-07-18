import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'my-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  eur: number;
  mdl: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.mdl = rates['MDL'];
    this.dollar = this.bill.value / (this.mdl / rates['USD']);
    this.eur = this.bill.value / this.mdl;


  }

}
