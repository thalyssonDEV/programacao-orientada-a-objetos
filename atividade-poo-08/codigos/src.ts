class Conta {
  private _titular: string;
  private _saldo: number;

  constructor(titular: string, saldo: number) {
    this._titular = titular;
    this.validaValor(saldo);  // Validando o saldo inicial
    this._saldo = saldo;
  }

  // Método de validação de valor
  private validaValor(valor: number): void {
    if (isNaN(valor) || valor <= 0) {
      throw new Error("Valor inválido. O valor deve ser maior que zero.");
    }
  }

  // Getter e Setter para titular
  get titular(): string {
    return this._titular;
  }

  set titular(nome: string) {
    this._titular = nome;
  }

  // Getter e Setter para saldo
  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    this.validaValor(valor);  // Validando ao definir saldo
    this._saldo = valor;
  }

  depositar(valor: number): void {
    this.validaValor(valor);  // Validando o valor antes de depositar
    this._saldo += valor;
    console.log(`${this._titular}: Depósito de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${this._saldo.toFixed(2)}`);
  }

  sacar(valor: number): void {
    this.validaValor(valor);  // Validando o valor antes de sacar
    if (valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`${this._titular}: Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${this._saldo.toFixed(2)}`);
    } else {
      console.log(`${this._titular}: Saldo insuficiente para saque de R$${valor.toFixed(2)}. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }
  }

  transferir(valor: number, contaDestino: Conta): void {
    this.validaValor(valor);  // Validando o valor antes de transferir
    if (valor > this._saldo) {
      throw new Error(`${this._titular}: Saldo insuficiente para transferência de R$${valor.toFixed(2)}. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }
    this._saldo -= valor;
    contaDestino.saldo += valor;
    console.log(`Transferência de R$${valor.toFixed(2)} realizada com sucesso de ${this._titular} para ${contaDestino.titular}.`);
  }
}

class Banco {
  contas: Conta[] = [];

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  transferir(valor: number, contaOrigem: Conta, contaDestino: Conta): void {
    contaOrigem.transferir(valor, contaDestino);
  }
}

class App {
  banco: Banco;

  constructor() {
    this.banco = new Banco();
  }

  menu(): void {
    const conta1 = new Conta("Alice", 100.0);
    const conta2 = new Conta("Bob", 50.0);

    this.banco.adicionarConta(conta1);
    this.banco.adicionarConta(conta2);

    // Realizando Exemplos de operações com os valores de saldo, débito e crédito, incluindo tratamento de erro

    try {
      console.log("Tentando realizar um depósito...");
      conta1.depositar(50.0); // Depósito válido
      conta1.depositar(-20.0); // Depósito inválido (erro)
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      console.log("Tentando realizar um saque...");
      conta1.sacar(30.0);  // Saque válido
      conta1.sacar(200.0); // Saque inválido (saldo insuficiente)
      conta1.sacar(-10.0); // Saque inválido (erro de valor)
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      console.log("Tentando realizar uma transferência...");
      this.banco.transferir(50.0, conta1, conta2);  // Transferência válida
      this.banco.transferir(-10.0, conta1, conta2); // Transferência inválida (erro de valor)
    } catch (error) {
      console.error((error as Error).message);
    }
  }
}

const app = new App();
app.menu();