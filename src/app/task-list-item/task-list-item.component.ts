import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  @Input() task: Task;
  /* TaskListComponent から TaskListItemComponent の 
  task クラス変数に対して、（自分のクラス変数である） task を渡す */

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }
}
