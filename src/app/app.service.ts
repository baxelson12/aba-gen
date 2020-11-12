import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import * as ABA from 'aba-generator';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  generateAba(form) {
    const aba = new ABA({
      bank: form.sender.bank,
      user: form.sender.user,
      userNumber: form.sender.user_number,
      description: form.sender.description,
    });
    const trans = {
      bsb: form.recipient[0].bsb,
      transactionCode: form.recipient[0].transcode,
      account: form.recipient[0].account,
      amount: form.recipient[0].amount,
      accountTitle: 'Georgian Council of South Wales',
      reference: form.recipient[0].reference,
      traceBsb: '061123',
      traceAccount: '1234567',
      remitter: 'Acme Inc',
    };

    const file = aba.generate([trans]);

    this.download(file);
  }

  private download(file: string) {
    const blob = new Blob([file], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'ABA.txt');
  }
}
