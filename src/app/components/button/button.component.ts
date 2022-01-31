import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ""; //se define el método por el cual se toma el texto del botón (lo busca en el módulo HTML del header)
  @Input() color: string = ""; //ídem para el color
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}
