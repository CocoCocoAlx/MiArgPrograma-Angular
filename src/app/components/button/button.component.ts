import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ""; //se define el método por el cual se toma el texto del botón (lo busca en el módulo HTML del header)
  @Input() color: string = ""; //ídem para el color
  @Output() btnClick = new EventEmitter() //esta es una definición para eventos que "salen" del módulo

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit() //orden para que el click "salga" del módulo
  }

}
