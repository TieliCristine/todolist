import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-task',
  templateUrl: './drag-drop-task.component.html',
  styleUrl: './drag-drop-task.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CdkDrag,
    CdkDropList
  ]
})
export class DragDropTaskComponent {

}
