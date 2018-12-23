export class Racer {
  public number: number;
  public name: string;
  public timestamps: Date[];

  constructor(number: number, name: string) {
    this.number = number;
    this.name = name;
    this.timestamps = [new Date()];
  }
}
