import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http' //se importa el módulo para trabajar con peticiones sobre una base de datos (GET y POST)
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks' //se define la URL donde corre el servidor JSON

  constructor(
    private http:HttpClient
   ) { }

  getTasks(): Observable<Task[]>{ //esta es la función del servicio, devuelve las tareas guardadas
    return this.http.get<Task[]>(this.apiUrl)
  }
}
