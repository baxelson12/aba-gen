import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Create initial form
  abaForm = this.fb.group({
    sender: this.fb.group({
      bank: [''],
      user: [''],
      userNumber: [''],
      description: [''],
    }),
    recipient: this.fb.array([]),
  });

  // Makes it easier to retrieve array controls
  get recipient(): FormArray {
    return this.abaForm.get('recipient') as FormArray;
  }
  constructor(private fb: FormBuilder, private as: AppService) {
    // Start the app with one empty recipient/transaction
    this.addRecipient();
  }

  // Ship to service, reset form
  onSubmit() {
    this.as.generateAba(this.abaForm.value);
    this.abaForm.reset();
  }

  // Create one empty recipient/transaction
  addRecipient() {
    const form = this.fb.group({
      bsb: [''],
      transactionCode: [''],
      account: [''],
      amount: [''],
      accountTitle: [''],
      reference: [''],
      traceBsb: [''],
      traceAccount: [''],
      remitter: [''],
    });

    this.recipient.push(form);
  }

  // Remove recipient/transaction
  removeRecipient(i: number) {
    this.recipient.removeAt(i);
  }
}
