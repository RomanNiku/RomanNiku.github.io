import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';

@Injectable()

export class BillService {
  constructor(private http: Http) {}

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:3000/bill')
      .map((response: Response) => response.json());
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.http.put('http://localhost:3000/bill', bill)
      .map((response: Response) => response.json());
  }

  getCurrency(): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=cf3b1a9d13d1acc2bc60dd527ce304d4`)
      .map((response: Response) => response.json());

  }
}
