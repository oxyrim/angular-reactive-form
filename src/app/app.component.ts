import { Component, OnInit, VERSION } from '@angular/core';
import { Person } from './interface';
import { PersonService } from './person.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  person: Person[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.person$.subscribe((personJson: any) => {
      this.person = [...JSON.parse(personJson)];
    });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id);
  }
}
