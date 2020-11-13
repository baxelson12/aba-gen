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
    this.createAba(form.sender);
    this.createTransactionsArray(form.recipient);
    const file = this.aba.generate(this.transactions);
    this.download(file);
  }

  private createAba(sender: Sender) {
    this.aba = new ABA(sender);
  }

  private createTransactionsArray(arr: Receiver[]) {
    this.transactions = [];
    arr.forEach((y) => {
      this.transactions.push(y);
    });
  }

  private download(file: string) {
    const blob = new Blob([file], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'generated.aba');
  }
}
