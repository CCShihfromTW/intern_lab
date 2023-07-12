import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/@services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'Todo List';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todoDataList = [];
    this.todoService.getData();
  }

}
