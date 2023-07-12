import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { TodoInfoModalComponent } from './section/todo-info-model/todo-info-modal.component';


@NgModule({
  declarations: [
    TodoComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TodoInfoModalComponent,],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
  ]
})
export class TodoModule { }
