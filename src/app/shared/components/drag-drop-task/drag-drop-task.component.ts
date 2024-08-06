import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-task',
  templateUrl: './drag-drop-task.component.html',
  styleUrl: './drag-drop-task.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class DragDropTaskComponent {

}
