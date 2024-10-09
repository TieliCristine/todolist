import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from "@angular/cdk/menu";
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { MatToolbar } from "@angular/material/toolbar";
import { TaskService } from "../../services/task.service";
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { TaskStatus } from '../../../domain/enum/task-status.enum';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatButtonModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    CdkDropList,
    CdkDrag,
    MatToolbar,
    MatIcon,
    FormsModule,
    NgIf,
    MatInput
  ]
})
export class TasksComponent {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Get to work', 'Pick up groceries', 'Go home', 'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = [ 'clean house', 'wash the dishes', 'try something new' ];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  errorMessage: string = '';
  form: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: TaskStatus.TODO
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  createTask() {
    console.log('Função createTask acionada')
  }

  getTasks() {

  }

}
