// 6. Na questão sobre retângulos do exercício anterior, crie um método que retorna
// verdadeiro ou falso se o retângulo é um quadrado.

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

  public ehQuadrado(): boolean {
    if (this.largura == this.altura) {
      return true;
    } else {
      return false;
    }
  }
}

function main() {
  const altura = Number(question("Digite a Altura do Retangulo: "))
  const largura = Number(question("Digite a Largura do Retangulo: "))

  const retangulo = new Retangulo(altura, largura);

  console.log(`\nÁrea: ${retangulo.calcularArea().toFixed(1)}`);
  console.log(`Perímetro: ${retangulo.calcularPerimetro().toFixed(1)}`);
  console.log(`É um Retângulo Quadrado?: ${retangulo.ehQuadrado()}`)
}

main();
