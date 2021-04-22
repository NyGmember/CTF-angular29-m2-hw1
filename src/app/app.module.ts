import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from './addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
