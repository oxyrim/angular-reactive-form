import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from './person';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private personObj: Person[] = [
    new Person(1, 'Michael', 'Scott'),
    new Person(2, 'Jim', 'Halpert'),
    new Person(3, 'Dwight', 'Schrute'),
  ];

  personJSON: string = JSON.stringify(this.personObj);

  person$ = new BehaviorSubject<String>(this.personJSON);

  deletePerson(id: number) {
    this.personObj = this.personObj.filter((person) => person.id !== id);
    this.person$.next(JSON.stringify(this.personObj));
  }

  addPerson(newPerson) {
    this.personObj = [...this.personObj, newPerson];
    this.person$.next(JSON.stringify(this.personObj));
  }
}
