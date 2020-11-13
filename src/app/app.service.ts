import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import * as ABA from 'aba-generator';
import { Sender } from './shared/interfaces/sender';
import { Receiver } from './shared/interfaces/receiver';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  aba: any;
  transactions: Receiver[];

  generateAba(form) {
    // Create sending party
    this.createAba(form.sender);
    // Create transactions
    this.createTransactionsArray(form.recipient);
    // Put it all together
    const file = this.aba.generate(this.transactions);
    // Send for download
    this.download(file);
  }

  private createAba(sender: Sender) {
    this.aba = new ABA(sender);
  }

  private createTransactionsArray(arr: Receiver[]) {
    // Start with fresh array
    this.transactions = [];
    // Iterate through received array
    arr.forEach((y) => {
      this.transactions.push(y);
    });
  }

  private download(file: string) {
    // Needs to be a blob
    const blob = new Blob([file], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'generated.aba');
  }
}
