import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  title = 'SearchService';
  selectedValue: string | undefined;
  selectedValue1: string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
