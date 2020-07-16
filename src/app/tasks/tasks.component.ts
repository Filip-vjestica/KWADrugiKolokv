import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../interface/task';
import { TaskService } from '../service/task.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  formActive: boolean = false;

  @Output() onSubmit: EventEmitter<object> = new EventEmitter();

  constructor(private ts: TaskService, public login: LoginService) {}

  ngOnInit(): void {
    this.ts.getAll().subscribe((r) => (this.tasks = r));
  }

  delete(id: number) {
    this.ts.delete(id).subscribe((r) => this.ngOnInit());
  }

  addNew() {
    this.formActive = true;
  }

  save(newTask: Task) {
    this.ts.create(newTask).subscribe((r) => {
      this.ngOnInit(),
        (newTask = {
          id: null,
          description: null,
          status: null,
          title: null,
        });
      this.onSubmit.emit({ message: 'Task added' });
    });
  }
}
