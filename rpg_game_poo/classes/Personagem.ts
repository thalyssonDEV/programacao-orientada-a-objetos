import { print, randomInt } from '../utils/utils';
import { cores } from '../colors/cores';

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
    private calcularPorcentagemDano(potencia: number): number{
      if (potencia <= 20) {
        return this._ataque * 0.7;
      } else if (potencia <= 80) {
        return this._ataque;
      } else {
        return this._ataque * 1.7;
      }
    }

    private receberDano(dano: number): void {
        this._vida -= dano;
    }
  
    // Métodos Públicos
    public retornarPotenciaAtaque(potencia: number): string {
      if (potencia <= 20) {
        return `${cores.vermelhoNegrito}FRACO${cores.reset}`;
      } else if (potencia <= 80) {
        return `${cores.azulNegrito}NORMAL${cores.reset}`;
      } else {
        return `${cores.amareloNegrito}CRÍTICO${cores.reset}`;
      }
    }

    public atacar(alvo: Personagem): void {
      let potencia = randomInt(1,100);
      
      const danoReal = this.calcularPorcentagemDano(potencia);
      const danoComDefesa = danoReal - (danoReal * (alvo.defesa / 100));
      print(`${this.nome} Usou um Ataque De Dano ${this.retornarPotenciaAtaque(potencia)} à ${alvo.nome} e Causou ${danoComDefesa.toFixed(2)} de Dano.`);
  
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