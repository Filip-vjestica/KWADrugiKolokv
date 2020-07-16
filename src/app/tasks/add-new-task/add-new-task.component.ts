import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css'],
})
export class AddNewTaskComponent implements OnInit {
  @Input() tasks: Task[];

  @Output() onSubmit: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  newTask: Task = {
    id: null,
    title: null,
    description: null,
    status: null,
  };

  submit() {
    this.onSubmit.emit(this.newTask);
  }
}
