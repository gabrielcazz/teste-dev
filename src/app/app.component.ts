import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas';

  taskName: string;
  taskDesc: string;
  taskDate: string;
  editMode = false;

  tasks: Task[] = [
    {
      name: 'Tarefa 1 - Exemplo',
      deadLine: new Date().toLocaleDateString(),
      description: 'Descrição Exemplo',
      done: false
    },
    {
      name: 'Tarefa 2 - Exemplo',
      deadLine: new Date().toLocaleDateString(),
      description: 'Descrição Exemplo',
      done: false
    }
  ]

  onEditMode() {
    this.editMode = !this.editMode;
    console.log(this.editMode)
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadLine: this.taskDate,
      description: this.taskDesc,
      done: false
    }
    this.tasks.push(task);
    this.editMode = false;
    this.taskName = '';
    this.taskDesc = '';
    this.taskDate = '';
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
  }

  markTaskAsDone(task: Task) {
    task.done = true;
  }

  onClear() {
    this.tasks = [];
  }
}
