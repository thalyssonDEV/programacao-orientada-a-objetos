// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
// retângulo.

import { question } from 'readline-sync';

class Retangulo {
  private altura: number;
  private largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  public calcularArea(): number {
    return this.altura * this.largura;
  }

  public calcularPerimetro(): number {
    return (this.altura * 2) + (this.largura * 2);
  }
}

function main() {
  const altura = Number(question("Digite a Altura do Retangulo: "))
  const largura = Number(question("Digite a Largura do Retangulo: "))
  
  const retangulo = new Retangulo(altura, largura);

  console.log(`\nÁrea: ${retangulo.calcularArea().toFixed(1)}`);
  console.log(`Perímetro: ${retangulo.calcularPerimetro().toFixed(1)}`);
}

main();
