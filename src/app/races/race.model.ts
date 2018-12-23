import { Racer } from "../shared/racer.model";

export class Race {
  public name: string;
  public description: string;
  public imagePath: string;
  public racers: Racer[];

  constructor(name: string, desc: string, imagePath: string, racers: Racer[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.racers = racers;
  }
}
