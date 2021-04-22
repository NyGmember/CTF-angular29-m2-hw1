import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../task";
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  @Input() taskName:String;
  @Input() taskDetail:String;

  @Output()
  OnAddTask: EventEmitter<Task> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.OnAddTask.emit({id:0, name:this.taskName, description:this.taskDetail});
  }
}
