import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {HijoComponent} from "../shared/hijo/hijo.component";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-padre-con-dynamic-dialog',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        HijoComponent,
        InputTextModule,
        PaginatorModule,
        ReactiveFormsModule
    ],
  templateUrl: './padre-con-dynamic-dialog.component.html',
  styleUrl: './padre-con-dynamic-dialog.component.scss',
  providers: [DialogService]
})
export class PadreConDynamicDialogComponent {
  private _formBuilder = inject(FormBuilder);

  ref: DynamicDialogRef | undefined;
  dialogService = inject(DialogService)

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
    this.ref = this.dialogService.open(HijoComponent, { header: 'Pet Details'});
  }
}
