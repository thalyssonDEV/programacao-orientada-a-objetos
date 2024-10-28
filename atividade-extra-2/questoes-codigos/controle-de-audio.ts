// 5. Crie uma classe chamada ControleDeAudio a partir das orientações:

// a. A classe deve ter um atributo inteiro representando o volume inicializado com o valor 2.

// b. Crie um método chamado aumentar volume que incrementa em um o valor atual.
// O método não deve deixar o valor ficar maior que 10. Utilize um if para isso;

// c. Crie um método chamado diminuir volume que decrementa em um o valor atual.
// O método não deve deixar o valor ficar menor 0.

// d. Crie um método chamado lerVolume que retorna o valor do volume.

import { question } from 'readline-sync'

class ControleDeAudio {
  private volume: number;

  constructor(volume: number) {
    this.volume = volume;
  }

  public increaseVolume(): void {
    if (this.volume == 10) {
      console.log("\x1b[31mMaximum Volume Reached\x1b[0m");
    } else {
      this.volume++;
      console.log("\x1b[92mVolume Increased\x1b[0m");
    }
  }

  public decreaseVolume(): void {
    if (this.volume == 0) {
      console.log("\x1b[31mMinimum Volume Reached\x1b[0m");
    } else {
      this.volume--;
      console.log("\x1b[91mVolume Decreased\x1b[0m");
    }
  }

  public readVolume(): number {
    return this.volume;
  }
}

class Menu {
  private static options: string[] = [" [ 1 ] - Increase Volume", 
  " [ 2 ] - Decrease Volume", 
  " [ 3 ] - Show Volume"];
  
  static showMenu(): void {
    Menu.options.forEach(option => console.log(option));
  }
}

function main() {
  console.clear();
  const initialVolume = 2;
  
  let sound: ControleDeAudio = new ControleDeAudio(initialVolume);

  while (true) {
    Menu.showMenu();

    let choice = Number(question("\nEnter Your Option: "));
    switch (choice) {
      case 1:
        sound.increaseVolume();
        break;
      case 2:
        sound.decreaseVolume();
        break;
      case 3:
        console.log(`\x1b[94mVolume -\x1b[0m ${sound.readVolume()}`);
        break;
    }
  }
}

main();
