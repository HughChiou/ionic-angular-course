import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  expenses = [];

  constructor() { }

  addExpense(reason, amount) {
    amount = parseFloat(amount);
    console.log({ reason, amount });
    this.expenses.push({ reason, amount });
  }

  get totalExpense() {
    return [...this.expenses].map(e => e.amount).reduce((a, b) => a || 0 + b || 0, 0);
  }
}
