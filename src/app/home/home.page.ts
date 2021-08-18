import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Start with Ionic';
  prevText: string;
  yourName;

  constructor() { }

  onClick() {
    const { prevText } = this;

    this.prevText = this.text;
    this.text = prevText || 'Whatever';
  }

}
