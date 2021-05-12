import LogOutputService from "./LogOutputService";

interface BankRegister {
  amount: number;
  date: string;
  total: number;
}
export default class AccountService {
  private store: Array<BankRegister> = []

  constructor(
    private outputService = new LogOutputService()
  ) {}

  deposit(amount: number): void {
    this.store.unshift({
      amount,
      date: this.plainCurrentDate(),
      total: this.calculateTotal(amount)
    })
  }

  withdraw(amount: number): void {
    this.store.unshift({
      amount: -amount,
      date: this.plainCurrentDate(),
      total: this.calculateTotal(-amount)
    })
  }

  printStatement(): void {
    this.outputService.print(this.movements())
  }

  private movements(): string {
    let movements = 'Date,Amount,Balance\n'
    this.store.forEach((movement: BankRegister) => {
      movements += `${movement.date},${movement.amount},${movement.total}\n`
    })
    return movements
  }

  private plainCurrentDate(): string {
    const today = new Date();
    const month = today.getMonth() + 1;
    const formattedMonth = month < 10 ? `0${month}` : month
    return `${today.getDate()}/${formattedMonth}/${today.getFullYear()}`
  }

  private calculateTotal(amount: number): number {
    const total = this.store.length === 0 ? 0 : this.store[0].total
    return total + amount
  }
}