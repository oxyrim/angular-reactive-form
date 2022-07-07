import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  personForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private personService: PersonService) {}

  ngOnInit() {}

  addPerson() {
    const data = this.personForm.value;
    const newPerson = new Person(+data.id, data.firstName, data.lastName);
    this.personService.addPerson(newPerson);
    this.personForm.reset();
  }
}
