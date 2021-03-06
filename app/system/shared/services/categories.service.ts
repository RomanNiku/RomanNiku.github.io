import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../models/category.model';

@Injectable()

export class CategoriesService {

  constructor(public http: Http) {
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post('http://localhost:3000/categories', category)
      .map((response: Response) => response.json());
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('http://localhost:3000/categories')
      .map((response: Response) => response.json());
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put(`http://localhost:3000/categories/${category.id}`, category)
      .map((response: Response) => response.json());
  }

}

