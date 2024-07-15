import { Component } from '@angular/core';

@Component({
  selector: 'app-counter1',
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
}
