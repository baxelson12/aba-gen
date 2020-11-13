export interface Sender {
  bank: string;
  user: string;
  userNumber: number;
  description: string;

  bsb?: string;
  account?: string;
  date?: Date | string | number;
  time?: Date | string | number;
}
