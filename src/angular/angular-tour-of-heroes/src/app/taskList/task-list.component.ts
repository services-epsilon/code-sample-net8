import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask.trim());
      this.tasks.push(this.newTask.trim());
    } else {
      alert('Le nom de la tâche ne peut être vide');
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
