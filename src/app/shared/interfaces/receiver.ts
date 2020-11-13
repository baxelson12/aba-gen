enum Withholding {
  N = 'N',
  W = 'W',
  X = 'X',
  Y = 'Y',
}

export interface Receiver {
  bsb: number;
  transactionCode: number;
  account: number;
  amount: number;
  accountTitle: string;
  reference: string;
  traceBsb: number;
  traceAccount: number;
  remitter: string;

  tax?: Withholding;
  taxAmount?: number;
}
