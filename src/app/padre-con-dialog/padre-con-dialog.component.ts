import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {HijoComponent} from "../shared/hijo/hijo.component";

@Component({
  selector: 'app-padre-con-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    HijoComponent
  ],
  templateUrl: './padre-con-dialog.component.html',
  styleUrl: './padre-con-dialog.component.scss'
})
export class PadreConDialogComponent {

  private _formBuilder = inject(FormBuilder);

  petDialog: boolean = false;

  formGroup = this._formBuilder.group({
    name: ['Jonathan'],
    age: [24],
    tool: ['Laptop'],
    pet: this._formBuilder.group({
      name: ['Perlita'],
      color: ['Gray']
    }),
  });

  showDialog() {
    this.petDialog = true;
  }

}
