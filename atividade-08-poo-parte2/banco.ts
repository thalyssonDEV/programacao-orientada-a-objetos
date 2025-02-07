// 1) Classes de exceção

class AplicacaoError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "AplicacaoError";
    }
  }
  
  class ContaInexistenteError extends AplicacaoError {
    constructor(message: string) {
      super(message);
      this.name = "ContaInexistenteError";
    }
  }
  
  class ClienteNaoEncontradoError extends AplicacaoError {
    constructor(message: string) {
      super(message);
      this.name = "ClienteNaoEncontradoError";
    }
  }
  
  class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string) {
      super(message);
      this.name = "SaldoInsuficienteError";
    }
  }
  
  class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
      super(message);
      this.name = "ValorInvalidoError";
    }
  }
  
  class PoupancaInvalidaError extends AplicacaoError {
    constructor(message: string) {
      super(message);
      this.name = "PoupancaInvalidaError";
    }
  }
  
  // 7) Classe Cliente com validações de CPF e data de nascimento
  
  class Cliente {
    public readonly nome: string;
    public readonly cpf: string;
    public readonly dataNascimento: Date;
  
    constructor(nome: string, cpf: string, dataNascimento: Date) {
      // Validações básicas para valores de entrada:
      if (!nome || nome.trim() === "") {
        throw new ValorInvalidoError("Nome inválido.");
      }
      if (!Cliente.validarCPF(cpf)) {
        throw new ValorInvalidoError("CPF inválido.");
      }
      if (!Cliente.validarDataNascimento(dataNascimento)) {
        throw new ValorInvalidoError("Data de nascimento inválida.");
      }
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
    }
  
    // Validação simples: verifica se o CPF possui 11 dígitos (apenas números)
    static validarCPF(cpf: string): boolean {
      const cpfLimpo = cpf.replace(/\D/g, "");
      return cpfLimpo.length === 11;
    }
  
    // Validação: a data de nascimento não pode ser no futuro
    static validarDataNascimento(data: Date): boolean {
      return data < new Date();
    }
  }
  
  // 4) Classe Conta (classe base) – o saldo inicial é atribuído pelo método depositar
  // 5) Método privado validarValor para evitar duplicação de código
  
  abstract class Conta {
    protected _saldo: number = 0;
    public readonly numero: string;
    public readonly cliente: Cliente;
  
    constructor(numero: string, cliente: Cliente, saldoInicial: number = 0) {
      this.numero = numero;
      this.cliente = cliente;
      // O saldo inicial é atribuído utilizando o método depositar
      if (saldoInicial > 0) {
        this.depositar(saldoInicial);
      }
    }
  
    get saldo(): number {
      return this._saldo;
    }
  
    // Método privado para validar se o valor é maior que zero
    private validarValor(valor: number): void {
      if (valor <= 0) {
        throw new ValorInvalidoError("Valor inválido. Deve ser maior que zero.");
      }
    }
  
    public depositar(valor: number): void {
      this.validarValor(valor);
      this._saldo += valor;
    }
  
    public sacar(valor: number): void {
      this.validarValor(valor);
      if (valor > this._saldo) {
        throw new SaldoInsuficienteError("Saldo insuficiente para saque.");
      }
      this._saldo -= valor;
    }
  }
  
  // Classes derivadas de Conta – exemplo: ContaCorrente e ContaPoupanca
  
  class ContaCorrente extends Conta {
    // Regras específicas para conta corrente podem ser implementadas aqui
  }
  
  class ContaPoupanca extends Conta {
    // Método para render juros. A taxa deve ser maior que zero.
    public renderJuros(taxa: number): void {
      if (taxa <= 0) {
        throw new ValorInvalidoError("Taxa de juros inválida. Deve ser maior que zero.");
      }
      // Exemplo: adiciona os juros calculados ao saldo
      this._saldo += this._saldo * (taxa / 100);
    }
  }
  
  // 2) Classe Banco com métodos de consulta e operações sem utilizar find, findIndex ou some
  
  class Banco {
    private contas: Conta[] = [];
    private clientes: Cliente[] = [];
  
    // Consulta uma conta pelo número utilizando loop; se não encontrada, lança exceção.
    public consultar(numero: string): Conta {
      for (let i = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero === numero) {
          return this.contas[i];
        }
      }
      throw new ContaInexistenteError(`Conta ${numero} não encontrada.`);
    }
  
    // Retorna o índice da conta no array utilizando um loop; se não encontrada, lança exceção.
    public consultarPorIndice(numero: string): number {
      for (let i = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero === numero) {
          return i;
        }
      }
      throw new ContaInexistenteError(`Conta ${numero} não encontrada.`);
    }
  
    // Consulta um cliente pelo CPF utilizando loop; se não encontrado, lança exceção.
    public consultarCliente(cpf: string): Cliente {
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].cpf === cpf) {
          return this.clientes[i];
        }
      }
      throw new ClienteNaoEncontradoError(`Cliente com CPF ${cpf} não encontrado.`);
    }
  
    // Retorna o índice do cliente no array utilizando um loop; se não encontrado, lança exceção.
    public consultarClientePorIndice(cpf: string): number {
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].cpf === cpf) {
          return i;
        }
      }
      throw new ClienteNaoEncontradoError(`Cliente com CPF ${cpf} não encontrado.`);
    }
  
    // Adiciona um cliente, validando duplicidade sem utilizar "some"
    public adicionarCliente(cliente: Cliente): void {
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].cpf === cliente.cpf) {
          throw new AplicacaoError(`Cliente com CPF ${cliente.cpf} já existe.`);
        }
      }
      this.clientes.push(cliente);
    }
  
    // Adiciona uma conta, garantindo que:
    // (a) o número da conta não esteja duplicado e
    // (b) um cliente não possua mais de uma conta.
    public adicionarConta(conta: Conta): void {
      // Verifica duplicidade de número da conta
      for (let i = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero === conta.numero) {
          throw new AplicacaoError(`Conta ${conta.numero} já existe.`);
        }
      }
      // Verifica se o cliente já possui uma conta
      for (let i = 0; i < this.contas.length; i++) {
        if (this.contas[i].cliente.cpf === conta.cliente.cpf) {
          throw new AplicacaoError(`Cliente com CPF ${conta.cliente.cpf} já possui uma conta.`);
        }
      }
      this.contas.push(conta);
    }
  
    // Atualiza os dados de uma conta já existente.
    public alterarConta(conta: Conta): void {
      const indice = this.consultarPorIndice(conta.numero);
      this.contas[indice] = conta;
    }
  
    // 3) Operações sem necessidade de condicionais extras, pois as exceções já são lançadas nos métodos de consulta.
    public depositar(numero: string, valor: number): void {
      const conta = this.consultar(numero);
      conta.depositar(valor);
    }
  
    public sacar(numero: string, valor: number): void {
      const conta = this.consultar(numero);
      conta.sacar(valor);
    }
  
    public transferir(origem: string, destino: string, valor: number): void {
      const contaOrigem = this.consultar(origem);
      const contaDestino = this.consultar(destino);
      contaOrigem.sacar(valor);
      contaDestino.depositar(valor);
    }
  
    // 6) Render juros somente para conta poupança; caso não seja, lança exceção.
    public renderJuros(numero: string, taxa: number): void {
      const conta = this.consultar(numero);
      if (!(conta instanceof ContaPoupanca)) {
        throw new PoupancaInvalidaError("Conta não é poupança para render juros.");
      }
      (conta as ContaPoupanca).renderJuros(taxa);
    }
  }
  
  // 8) Classe App – simula a entrada de dados, realiza validações e trata as exceções para que o programa não seja abortado.
  
  class App {
    private banco: Banco;
  
    constructor(banco: Banco) {
      this.banco = banco;
    }
  
    public executar(): void {
      try {
        // Criação de um cliente e conta (as validações ocorrem na criação dos objetos)
        const cliente1 = new Cliente("João Silva", "12345678901", new Date(1990, 5, 15));
        this.banco.adicionarCliente(cliente1);
  
        // Ao criar a conta, o saldo inicial é definido via método depositar
        const conta1 = new ContaCorrente("001", cliente1, 100);
        this.banco.adicionarConta(conta1);
  
        // Operações: depósito, saque e transferência
        this.banco.depositar("001", 50);
        console.log(`Saldo após depósito: ${this.banco.consultar("001").saldo}`);
  
        this.banco.sacar("001", 20);
        console.log(`Saldo após saque: ${this.banco.consultar("001").saldo}`);
  
        // Exemplo de transferência (aqui, transferindo para a própria conta apenas para demonstração)
        this.banco.transferir("001", "001", 10);
        console.log(`Saldo após transferência: ${this.banco.consultar("001").saldo}`);
  
        // Tenta render juros – como a conta é do tipo ContaCorrente, uma exceção é esperada.
        try {
          this.banco.renderJuros("001", 2);
        } catch (e) {
          if (e instanceof PoupancaInvalidaError) {
            console.warn("Render juros:", e.message);
          } else {
            throw e;
          }
        }
  
        // Cria um novo cliente e uma conta poupança (cada cliente pode ter apenas uma conta)
        const cliente2 = new Cliente("Maria Oliveira", "98765432100", new Date(1985, 10, 20));
        this.banco.adicionarCliente(cliente2);
        const contaPoupanca = new ContaPoupanca("002", cliente2, 200);
        this.banco.adicionarConta(contaPoupanca);
  
        // Render juros na conta poupança (operação bem-sucedida)
        this.banco.renderJuros("002", 3);
        console.log(`Saldo da poupança após juros: ${this.banco.consultar("002").saldo}`);
  
      } catch (error) {
        if (error instanceof AplicacaoError) {
          console.error("Erro de aplicação:", error.message);
        } else {
          console.error("Erro inesperado:", error);
        }
      }
    }
  }
  
  // Execução da aplicação
  const banco = new Banco();
  const app = new App(banco);
  app.executar();  