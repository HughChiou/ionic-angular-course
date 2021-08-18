import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  expenses = [];
  totalExpense = 0;

  constructor() { }

  addExpense(reason, amount) {
    amount = parseFloat(amount);
    console.log({ reason, amount });
    this.totalExpense += amount;
    this.expenses.push({ reason, amount });
  }
}
