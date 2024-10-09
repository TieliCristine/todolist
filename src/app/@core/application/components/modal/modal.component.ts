import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule, MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ModalComponent {

  messageForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) {
    this.messageForm = this.formBuilder.group({
      title: [ '', [ Validators.required ] ],
      text: [ '', [ Validators.required ] ],
      receiver: [ '', [ Validators.required ] ],
      timestamp: [ '', [ Validators.required ] ],
      status: [ '', [ Validators.required ] ],
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      const messageData = this.messageForm.value;
      this.dialogRef.close(messageData);
      console.log("onSubmit() modal enviando: ", messageData);
    }
  }
}
