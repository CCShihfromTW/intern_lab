import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../@models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  //private url = '/api/todo2_16';
  private url = '/spring/todo'
  constructor(private http: HttpClient) { }

  greeting(){
    return this.http.get("/spring/hello", { responseType: 'text' });
  }

  getToDoList() {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(value: Todo) {
    return this.http.post<Todo>('/api/todo2_16', value);
  }

  modify(value: Todo) {
    return this.http.put(`${this.url}/${value.todoId}`, value);
  }

  delete(value: Todo) {
    return this.http.delete(`${this.url}/${value.todoId}`);
  }

  sync(value: boolean) {
    return this.http.put(`${this.url}/Status/${value}`, null);
  }

  clearTasks() {
    return this.http.delete(`${this.url}/clearCompleted`);
  }

}
