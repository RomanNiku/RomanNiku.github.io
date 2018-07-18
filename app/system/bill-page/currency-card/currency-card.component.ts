import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  dollar: number;
  eur: number;


  ngOnInit() {
    const { rates } = this.currency;

    this.dollar = rates['MDL'] / rates['USD'];
    this.eur =  rates['MDL'];
  }





}
