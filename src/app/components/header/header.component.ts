import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Mi primer lista de tareas'; //Este título es dinámico

  constructor() { }

  ngOnInit(): void {
  }

}
