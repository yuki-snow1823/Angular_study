import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  constructor() {}

  @Output() addTask = new EventEmitter(); // $eventを受け取る

  newTask = {
    title: '',
    deadline: new Date()
  };

  ngOnInit(): void {}

  submit() {
    this.addTask.emit({ // ここで発火
      title: this.newTask.title,
      done: false,
      deadline: new Date(this.newTask.deadline)
    });
    this.newTask = {
      title: '',
      deadline: new Date()
    };
  }
}
