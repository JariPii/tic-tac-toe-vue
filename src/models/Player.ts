export class Player {
  id: number;
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.id = Date.now();
    this.name = name;
    this.symbol = symbol;
  }
}
