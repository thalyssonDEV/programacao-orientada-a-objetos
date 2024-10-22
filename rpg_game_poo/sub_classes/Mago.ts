import { Personagem } from "../classes/Personagem";

export class Mago extends Personagem {
    constructor(nome: string) {
      super(nome, 1000, 700, 5)
    }
  
    get classeNome(): string {
      return "Mago";
    }
}