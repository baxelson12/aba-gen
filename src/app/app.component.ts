import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  abaForm = this.fb.group({
    sender: this.fb.group({
      bank: [''],
      user: [''],
      user_number: [''],
      description: [''],
    }),
    recipient: this.fb.array,
  });
  constructor(private fb: FormBuilder) {}
}
