// 8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
// calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
// ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

import { question } from 'readline-sync'

class Circulo {
  private raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  public calcularArea(): number {
    return 3.14 * (this.raio * this.raio);
  }

  public calcularPerimetro(): number {
    return 2 * 3.14 * this.raio;
  }
}

function main() {
  const raio = Number(question("Digite o Raio Do Círculo: "));
  
  const circulo = new Circulo(raio);

  console.log(`Área: ${circulo.calcularArea().toFixed(1)}`);
  console.log(`Perímetro: ${circulo.calcularPerimetro().toFixed(1)}`);
}

main();
