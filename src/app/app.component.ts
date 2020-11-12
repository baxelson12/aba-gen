import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  abaForm = this.fb.group({
    sender: this.fb.group({
      bank: [''],
      user: [''],
      user_number: [''],
      description: [''],
    }),
    recipient: this.fb.array([]),
  });
  get recipient(): FormArray {
    return this.abaForm.get('recipient') as FormArray;
  }
  constructor(private fb: FormBuilder) {
    this.addRecipient();
  }
  ngOnInit() {}

  onSubmit() {
    console.log(this.abaForm.value);
  }

  addRecipient() {
    const form = this.fb.group({
      bsb: [''],
      transcode: [''],
      account: [''],
      amount: [''],
      reference: [''],
    });

    this.recipient.push(form);
  }

  removeRecipient(i: number) {
    this.recipient.removeAt(i);
  }
}
