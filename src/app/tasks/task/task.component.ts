import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task: Task = {
    id: null,
    description: null,
    status: null,
    title: null,
  };

  constructor(
    private ts: TaskService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ts
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.task = r));
  }

  submitChange() {
    this.ts
      .update(this.ar.snapshot.params['id'], this.task)
      .subscribe((r) => this.router.navigate(['/tasks']));
  }
}
