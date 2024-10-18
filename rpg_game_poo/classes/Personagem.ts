import { print, randomInt } from '../utils/utils';

export class Personagem {
    // Atributos

    protected _nome: string;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;
  
    // Construtor

    constructor(nome: string, vida: number, ataque: number, defesa: number) {
      this._nome = nome;
      this._vida = vida;
      this._ataque = ataque;
      this._defesa = defesa;
    }
  
    // Métodos Privados

    private calcularDano(){
      let forca = randomInt(1,100);
  
      if (forca <= 20) {
        return this._ataque * 0.7;
      } else if (forca <= 80) {
        return this._ataque;
      } else {
        return this._ataque * 1.7;
      }
    }

    private receberDano(dano: number): void {
        this._vida -= dano;
    }
  
    // Métodos Públicos

    public atacar(alvo: Personagem): void {
      const dano = this.calcularDano();
      const danoComDefesa = dano - (dano * (alvo.defesa / 100));
      print(`${this.nome} Atacou ${alvo.nome} e Causou ${dano.toFixed(2)} de Dano.`);
  
      alvo.receberDano(danoComDefesa);
    }
  
    public estaVivo(): boolean {
      return this.vida > 0;
    }
  
    // Getters e Setters

    get nome(): string {
      return this._nome;
    }
  
    get vida(): number {
      return this._vida;
    }
  
    get ataque(): number {
      return this._ataque;    
    }
  
    get defesa(): number {
      return this._defesa;
    }
  
    get classeNome(): string {
      return "ClasseNome";
    }
}