import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Task } from "../task";
import { TaskComponent } from "../task/task.component";
import { AddtaskComponent } from "../addtask/addtask.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @ViewChildren(TaskComponent)
  taskItems: QueryList<TaskComponent>

  tasks:Task[];

  constructor() {
    this.tasks = [
      // {
      //   id: 1,
      //   name: "Task 1",
      //   description: "Description text of task 1"
      // },
      // {
      //   id: 2,
      //   name: "Task 2",
      //   description: "Description text of task 2"
      // },
      // {
      //   id: 3,
      //   name: "Task 3",
      //   description: "Description text of task 3"
      // },
      // {
      //   id: 4,
      //   name: "Task 4",
      //   description: "Description text of task 4"
      // },
      // {
      //   id: 5,
      //   name: "Task 5",
      //   description: "Description text of task 5"
      // }
    ]
   }

  ngOnInit(): void {
  }

  deleteTask(taskId:Number){
    let delTask = this.tasks.filter(function(obj){
      return obj.id == taskId;
    });

    this.tasks = this.tasks.filter(function(obj){
      return obj.id !== taskId;
    });
    alert(`Task: ${delTask[0].name} deleted!`);
  }

  addTask(newTask:Task){
    let taskId:Number = this.getNewTaskId();
    this.tasks.push({
      id: taskId,
      name: newTask.name,
      description: newTask.description
    });
  }

  getNewTaskId(){
    if(this.tasks.length == 0){
      return 1;
    }
    
    let lastId = this.tasks[this.tasks.length - 1].id.valueOf();
    return lastId + 1;
  }
}
