import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { ErrorHandler } from './shared/handlers/error.handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Create initial form
  abaForm = this.fb.group({
    sender: this.fb.group({
      bank: ['', Validators.required],
      user: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      description: ['', [Validators.required]],
    }),
    recipient: this.fb.array([]),
  });
  // Errors
  errors: any = {};

  // Makes it easier to retrieve array controls
  get recipient(): FormArray {
    return this.abaForm.get('recipient') as FormArray;
  }
  // Makes it easier to retrieve sender controls
  get sender(): FormGroup {
    return this.abaForm.get('sender') as FormGroup;
  }

  constructor(
    private errorHandler: ErrorHandler,
    private fb: FormBuilder,
    private as: AppService
  ) {
    // Start the app with one empty recipient/transaction
    this.addRecipient();
  }

  ngOnInit() {
    this.errorHandler.handleErrors(this.abaForm, this.errors);
  }

  // Ship to service, reset form
  onSubmit() {
    this.as.generateAba(this.abaForm.value);
    this.resetForm();
  }

  resetForm() {
    this.abaForm.reset();
    this.abaForm.markAsPristine();
    this.abaForm.markAsUntouched();
  }

  // Create one empty recipient/transaction
  addRecipient() {
    const form = this.fb.group({
      bsb: ['', [Validators.required]],
      transactionCode: ['', [Validators.required]],
      account: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      accountTitle: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      traceBsb: ['', [Validators.required]],
      traceAccount: ['', [Validators.required]],
      remitter: ['', [Validators.required]],
    });

    this.recipient.push(form);
  }

  // Remove recipient/transaction
  removeRecipient(i: number) {
    this.recipient.removeAt(i);
  }
}
