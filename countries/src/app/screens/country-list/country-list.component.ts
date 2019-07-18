import { Component, OnInit } from '@angular/core';
import { Country, countries } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = countries;
  constructor() { }

  ngOnInit() {
  }

}
