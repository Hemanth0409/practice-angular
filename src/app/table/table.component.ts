import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  Employee = [
    { id: 101, name: 'Hemanth', dept: 'HR', salary: 10000 },
    { id: 102, name: 'Sharon', dept: 'HR', salary: 10000 },
    { id: 103, name: 'Harshan', dept: 'UI/UX', salary: 10000 },
    { id: 104, name: 'Hari', dept: 'Testing', salary: 10000 },
    { id: 105, name: 'Sharon', dept: 'HR', salary: 10000 },
  ];
  title = 'json-read-example';
  Products: any;
  url: string = '/assets/product.json';

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      this.Products = res;
    });
  }
}
