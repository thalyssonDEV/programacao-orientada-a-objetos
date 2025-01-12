class Calculadora {
    protected operando1: number;
    protected operando2: number;
  
    constructor(operando1: number, operando2: number) {
      this.operando1 = operando1;
      this.operando2 = operando2;
    }
  
    public soma(): number {
      return this.operando1 + this.operando2;
    }
  }
  
  class CalculadoraCientifica extends Calculadora {
    public exponenciar(): number {
      return Math.pow(this.operando1, this.operando2);
    }
  }
  
  // Exemplo
  const calculadoraCientifica = new CalculadoraCientifica(2, 3);
  console.log("Soma dos operandos:", calculadoraCientifica.soma());
  console.log("Exponenciação dos operandos:", calculadoraCientifica.exponenciar());

  // A única modificação necessária foi alterar os atributos privados para protected,
  // para que a classe filha tenha acesso aos atributos sem a necessidade de um getter.

  