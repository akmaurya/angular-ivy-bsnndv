import { Component, VERSION } from '@angular/core';
//import dataRecords from './data.json';

interface Candidate {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  records: Candidate[] = [
    {
      id: 1,
      firstName: 'Jeanette',
      lastName: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      firstName: 'Giavani',
      lastName: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      firstName: 'Noell',
      lastName: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      firstName: 'Willard',
      lastName: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
}
