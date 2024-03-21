import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PadreConDialogComponent} from "./padre-con-dialog/padre-con-dialog.component";
import {PadreConDynamicDialogComponent} from "./padre-con-dynamic-dialog/padre-con-dynamic-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreConDialogComponent, PadreConDynamicDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-dialog';
}
