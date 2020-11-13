import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AppService } from './app.service';

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
      userNumber: [''],
      description: [''],
    }),
    recipient: this.fb.array([]),
  });
  get recipient(): FormArray {
    return this.abaForm.get('recipient') as FormArray;
  }
  constructor(private fb: FormBuilder, private as: AppService) {
    this.addRecipient();
  }

  onSubmit() {
    this.as.generateAba(this.abaForm.value);
    this.abaForm.reset();
  }

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

  removeRecipient(i: number) {
    this.recipient.removeAt(i);
  }
}
