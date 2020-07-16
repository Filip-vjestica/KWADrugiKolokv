import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url: string = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  public getOne(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + `/${id}`);
  }

  public create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  public delete(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + `/${id}`);
  }

  public update(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + `/${id}`, task);
  }
}
