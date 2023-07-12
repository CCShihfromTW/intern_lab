import { Injectable } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from '../@models/todo.model';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  todoDataList: Todo[] = [];  

  get nowTodoList() {
    let list: Todo[] = [];

    switch (this.nowTodoStatusType) {
      case TodoStatusType.Active:
        list = this.todoActive;
        break;
      case TodoStatusType.Completed:
        list = this.todoCompleted;
        break;
      default:
        list = this.todoDataList;
        break;
    }

    return list;
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter(data => !data.status);
  }

  get todoCompleted(): Todo[] {
    return this.todoDataList.filter(data => data.status);
  }
  
  constructor(private todoApiService: TodoApiService) {
    this.getData();
  }

  getData() {
    this.todoApiService.getToDoList().subscribe(data => {
      this.todoDataList = data;
      this.todoDataList.forEach(data2 => {
        data2.CanEdit = true;
        data2.editing = false;
      });
      this.checkToggleAllBtn();
    });
  }

  add(value: string) {
    const seqno = new Date().getTime();
    const todo: Todo = new TodoClass(value, false, seqno);
    this.todoDataList.push(todo);
    this.todoApiService.addTodo(todo).subscribe(data => {
      this.todoDataList.forEach(data2 => {
        if (data2.Seqno === seqno) {
            data2.todoId = data.todoId;
            data2.CanEdit = true;
        }
      })
    });
  }

  update(item: Todo) {
    //this.todoApiService.modify(item).subscribe();
    item.editing = false;
  }

  clickCheck(item: Todo) {
    item.status = !item.status;

    //this.todoApiService.modify(item).subscribe();
    this.checkToggleAllBtn();
  }

  delete(item: Todo) {
    //this.todoApiService.delete(item).subscribe();
    this.todoDataList = this.todoDataList.filter(data => data !== item);
  }

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    });

    //this.todoApiService.sync(this.toggleAllBtn).subscribe();
  }

  clearCompleted() {
    //this.todoApiService.clearTasks().subscribe();
    this.todoDataList = this.todoActive;
  }

  checkToggleAllBtn() {
    if (this.todoCompleted.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }
  
  setTodoStatusType(type: number) {
    this.nowTodoStatusType = type;
  }

}
