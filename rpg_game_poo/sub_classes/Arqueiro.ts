import { Personagem } from "../classes/Personagem";

export class Arqueiro extends Personagem {
    constructor(nome: string) {
      super(nome, 1500, 500, 10)
    }
  
    get classeNome(): string {
      return "Arqueiro";
    }
} 