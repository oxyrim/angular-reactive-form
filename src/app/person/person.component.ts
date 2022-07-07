import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Output() idEvent = new EventEmitter<number>();
  @Input('person') person: Person[];

  constructor() {}

  ngOnInit() {}

  deleteMe(id: number) {
    this.idEvent.emit(id);
  }
}
