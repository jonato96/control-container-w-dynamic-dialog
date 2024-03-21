import {Component, inject, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {ControlContainer, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-hijo',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        InputTextModule,
        ReactiveFormsModule
    ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent implements OnInit{

  private parentContainer = inject(ControlContainer);
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup;
  }

  get parentFormGroup() {
    return this.parentContainer.control?.get('pet') as FormGroup;
  }



}
