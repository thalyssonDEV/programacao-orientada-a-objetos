// 9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
// valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
// diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
// os dois atributos e exiba o resultado do método calcularSaldo().

import { question } from 'readline-sync'

class SituacaoFinanceira {
  private valorCreditos: number;
  private valorDebitos: number;

  constructor(valorCreditos: number, valorDebitos: number) {
    this.valorCreditos = valorCreditos;
    this.valorDebitos = valorDebitos;
  }

  public calcularSaldo(): number {
    return Math.abs(this.valorCreditos - this.valorDebitos);
  }
}

function main() {
  const valorCreditos = Number(question("Digite o Valor de Crédito: "));
  const valorDebitos = Number(question("Digite o Valor de Débito: "));

  const situacaoFinanceira = new SituacaoFinanceira(valorCreditos, valorDebitos);

  console.log(`\nDiferença de Saldo: ${situacaoFinanceira.calcularSaldo().toFixed(2)} Reais`);
}

main();
