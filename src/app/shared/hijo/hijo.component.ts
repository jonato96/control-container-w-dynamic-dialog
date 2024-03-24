import { Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
	selector: 'app-hijo',
	standalone: true,
	imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './hijo.component.html',
	styleUrl: './hijo.component.scss'
})
export class HijoComponent implements OnInit {
	private parentContainer = inject(ControlContainer, { optional: true });
	formGroup!: FormGroup;

	private readonly _dynamicDialogConfig: DynamicDialogConfig<{ pet: FormGroup }> = inject(DynamicDialogConfig);

	ngOnInit(): void {
		this.formGroup = this.parentFormGroup ? this.parentFormGroup : this._dynamicDialogConfig.data!.pet;
	}

	get parentFormGroup() {
		return this.parentContainer?.control?.get('pet') as FormGroup;
	}
}
