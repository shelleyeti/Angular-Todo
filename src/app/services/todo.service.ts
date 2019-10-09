import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //this is a property
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos'

  //limits amount without it being displayed in the url string
  todosLimit = '?_limit=10';

  constructor(public http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
