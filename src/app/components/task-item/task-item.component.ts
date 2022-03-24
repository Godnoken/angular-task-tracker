import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  deleteTaskEmitter(task: Task) {
    this.onDelete.emit(task);
  }
}
