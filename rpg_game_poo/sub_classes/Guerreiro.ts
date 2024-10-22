import { Personagem } from "../classes/Personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
      super(nome, 3000, 250, 25)
    }
  
    get classeNome(): string {
      return "Guerreiro";
    }
}