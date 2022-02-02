import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service'; //acá se importa el servicio que gestiona la lista de tareas pendientes
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; //importar el listado de tareas y llamarlo "tasks"

  constructor(
    private taskService: TaskService //enlazar el servicio
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>[
      this.tasks = tasks //inicializar el servicio
    ])
  }

}
