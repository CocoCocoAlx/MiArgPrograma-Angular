import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; //se importan la interfaz y las tareas
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS; //importar el listado de tareas y llamarlo "tasks"

  constructor() { }

  ngOnInit(): void {
  }

}
