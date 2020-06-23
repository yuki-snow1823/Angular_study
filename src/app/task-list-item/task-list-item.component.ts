import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() task;
  /* TaskListComponent から TaskListItemComponent の 
  task クラス変数に対して、（自分のクラス変数である） task を渡す */

  isOverdue(task) {
    return !task.done && task.deadline < new Date().setHours(0, 0, 0, 0);
  }
}
