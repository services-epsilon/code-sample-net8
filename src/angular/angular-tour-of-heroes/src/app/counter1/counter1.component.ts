import { Component } from '@angular/core';

@Component({
  selector: 'app-counter1',
  standalone: false,
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component {
  count = 0;
  step = 0;

  increment() {
    this.count += this.step;
  }

  decrement() {
    this.count -= this.step;
  }

  error() {
    throw new Error('Not implemented exception error message');
  }
}
