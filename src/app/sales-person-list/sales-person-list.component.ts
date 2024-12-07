import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  imports: [CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'a.k@hotmail.com', 4322),
    new SalesPerson('Anup', 'Kumar', 'a.k@hotmail.com', 2133),
  ];
}
