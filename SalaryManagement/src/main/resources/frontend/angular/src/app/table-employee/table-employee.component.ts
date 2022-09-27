import { Component } from '@angular/core';


export interface PeriodicElement {
  id: string;
  name: string;
  login: string;
  salary: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', name: 'Hydrogen', login: '10079', salary: 0.0},
  {id: '2', name: 'Helium', login: '40026', salary: 1000.0},
  {id: '3', name: 'Lithium', login: '6941', salary: 2000.0},
  {id: '4', name: 'Beryllium', login: '90122', salary: 4000.0},
  {id: '5', name: 'Boron', login: '10811', salary: 1000.0},
  {id: '6', name: 'Carbon', login: '120107', salary: 6000.0},
  {id: '7', name: 'Nitrogen', login: '140067', salary: 8000.0},
  {id: '8', name: 'Oxygen', login: '159994', salary: 10000.0},
  {id: '9', name: 'Fluorine', login: '189984', salary: 5000.0},
  {id: '10', name: 'Neon', login: '201797', salary: 8000.0},
];

@Component({
  selector: 'table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent {
  displayedColumns: string[] = ['id', 'name', 'login', 'salary'];
  dataSource = ELEMENT_DATA;

  // constructor() { }

  // ngOnInit(): void {
  // }
}
