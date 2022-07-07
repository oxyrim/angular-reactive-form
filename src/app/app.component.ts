import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from './interface';
import { PersonService } from './person.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  person: Person[] = [];
  personSubscription: Subscription;
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personSubscription = this.personService.person$.subscribe(
      (personJson: any) => {
        this.person = [...JSON.parse(personJson)];
      }
    );
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id);
  }

  ngOnDestroy() {
    this.personSubscription.unsubscribe();
  }
}
