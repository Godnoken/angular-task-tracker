import { Injectable } from '@angular/core';

import { TASKS } from 'src/app/mock-task-data';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
