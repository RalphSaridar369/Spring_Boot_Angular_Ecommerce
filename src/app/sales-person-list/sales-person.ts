export class SalesPerson {
  public first_name: string;
  public last_name: string;
  public email: string;
  public volume: number;

  public constructor(fn: string, ln: string, email: string, v: number) {
    this.first_name = fn;
    this.last_name = ln;
    this.email = email;
    this.volume = v;
  }
}
