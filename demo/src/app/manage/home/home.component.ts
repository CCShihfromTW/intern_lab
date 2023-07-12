import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { TodoApiService } from 'src/app/@services/todo-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  constructor(private apiService: TodoApiService) { }
  greeting: string = '';
  ngOnInit(): void {
    this.apiService.greeting().subscribe(
      data => {
        console.log(data);
        this.greeting = data;
      }
    );
  }
}
