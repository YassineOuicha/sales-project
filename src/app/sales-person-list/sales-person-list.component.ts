import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit {
  // an array

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Lucas", "Martin", "lucas.martin@email.com", 41452),
    new SalesPerson("Emma", "Dupont", "emma.dupont@email.com", 145457),
    new SalesPerson("Hugo", "Morel", "hugo.morel@email.com", 3453),
    new SalesPerson("Léa", "Rousseau", "lea.rousseau@email.com", 24755),
    new SalesPerson("Arthur", "Lefebvre", "arthur.lefebvre@email.com", 584865),
    new SalesPerson("Clara", "Petit", "clara.petit@email.com", 1459),
    new SalesPerson("Nathan", "Girard", "nathan.girard@email.com", 7452),
    new SalesPerson("Chloé", "Bernard", "chloe.bernard@email.com", 8556),
    new SalesPerson("Jules", "Simon", "jules.simon@email.com", 6546454),
    new SalesPerson("Camille", "Durand", "camille.durand@email.com", 14541)
    ];

  constructor(){ }
  ngOnInit() {
  }

}
