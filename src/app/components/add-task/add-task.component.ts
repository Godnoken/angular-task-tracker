import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  title!: string;
  date!: string;
  description!: string;

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit() {
    if (!this.title) {
      alert("Please add a title!");
      return;
    }
    else if (!this.date) {
      alert("Please add a date!");
      return;
    }

    const newTask = {
      title: this.title,
      date: this.date,
      description: this.description
    }

    this.onAddTask.emit(newTask);

    this.title = "";
    this.date = "";
    this.description = "";
  }
}
