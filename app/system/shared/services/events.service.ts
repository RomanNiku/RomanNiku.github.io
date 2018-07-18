import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { MyEvent } from '../models/event.model';

@Injectable()
export class EventsService  {
  constructor(public http: Http) {

  }

  addEvent(event: MyEvent): Observable<MyEvent> {
    return this.http.post('http://localhost:3000/events', event)
      .map((response: Response) => response.json());
  }

  getEvents(): Observable<MyEvent[]> {
    return this.http.get('http://localhost:3000/events')
      .map((response: Response) => response.json());
  }

}
