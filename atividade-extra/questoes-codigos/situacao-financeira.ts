// 9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
// valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
// diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
// os dois atributos e exiba o resultado do método calcularSaldo().

import { question } from 'readline-sync'

class SituacaoFinanceira {
  private valorCredito: number;
  private valorDebito: number;

  constructor(valorCredito: number, valorDebito: number) {
    this.valorCredito = valorCredito;
    this.valorDebito = valorDebito;
  }

  public calcularSaldo(): number {
    return Math.abs(this.valorCredito - this.valorDebito);
  }
}

function main() {
  const valorCredito = Number(question("Digite o Valor de Crédito: "));
  const valorDebito = Number(question("Digite o Valor de Débito: "));

  const situacaoFinanceira = new SituacaoFinanceira(valorCredito, valorDebito);

  console.log(`\nDiferença de Saldo: ${situacaoFinanceira.calcularSaldo().toFixed(2)} Reais`);
}

main();
