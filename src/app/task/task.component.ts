import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Task } from "../task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
    task:Task;

  @Output()
  OnDelete: EventEmitter<Number> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.OnDelete.emit(this.task.id)
  }
}
