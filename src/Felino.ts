import { Animal } from "./Animal";

class Felino extends Animal {
  public emitSound(sound: string): void {
    console.log(`Felino emite ${sound}`);
  }
}

export { Felino };
