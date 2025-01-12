import * as fs from "fs";
import * as readline from "readline";

class Conta {
  private _id: number;
  private _numero: string;
  private _saldo: number;

  constructor(numero: string, saldo: number) {
    this._id = 0;
    this._numero = numero;
    this._saldo = saldo;
  }

  public sacar(valor: number): void {
    this._saldo -= valor;
  }

  public depositar(valor: number): void {
    this._saldo += valor;
  }

  public transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get numero(): string {
    return this._numero;
  }

  public get saldo(): number {
    return this._saldo;
  }
}

class Poupanca extends Conta {
  private _taxaDeJuros: number;

  constructor(numero: string, saldo: number, taxaDeJuros: number) {
    super(numero, saldo);
    this._taxaDeJuros = taxaDeJuros;
  }

  public renderJuros(): void {
    const juros = (this.saldo * this._taxaDeJuros) / 100;
    this.depositar(juros);
  }
}

class ContaImposto extends Conta {
  private _taxaDeImposto: number;

  constructor(numero: string, saldo: number, taxaDeImposto: number) {
    super(numero, saldo);
    this._taxaDeImposto = taxaDeImposto;
  }

  public descontarImposto(): void {
    const imposto = (this.saldo * this._taxaDeImposto) / 100;
    this.sacar(imposto);
  }
}

class Banco {
  private _contas: Conta[] = [];
  private _idContaAtual = 0;

  public inserirConta(conta: Conta): void {
    conta.id = this._idContaAtual++;
    this._contas.push(conta);
  }

  public consultarConta(numero: string): Conta | undefined {
    return this._contas.find((conta) => conta.numero === numero);
  }

  public listarContas(): void {
    this._contas.forEach((conta) => {
      console.log(`Conta ${conta.numero} - Saldo: ${conta.saldo.toFixed(2)}`);
    });
  }

  public carregarContasDeArquivo(caminhoArquivo: string): void {
    try {
      const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
      const linhas = conteudo.split("\n");

      for (const linha of linhas) {
        if (linha.trim() === "") continue;

        const [numero, saldoStr, tipo, taxaStr] = linha.split(";");
        const saldo = parseFloat(saldoStr.trim());
        const taxa = taxaStr ? parseFloat(taxaStr.trim()) : undefined;

        if (tipo.trim() === "C") {
          this.inserirConta(new Conta(numero.trim(), saldo));
        } else if (tipo.trim() === "CP") {
          this.inserirConta(new Poupanca(numero.trim(), saldo, taxa!));
        } else if (tipo.trim() === "CI") {
          this.inserirConta(new ContaImposto(numero.trim(), saldo, taxa!));
        }
      }

      console.log("Contas carregadas do arquivo com sucesso!");
    } catch (err) {
      console.error("Erro ao carregar contas do arquivo:", err);
    }
  }

  public salvarContasNoArquivo(caminhoArquivo: string): void {
    try {
      const conteudo = this._contas.map((conta) => {
        if (conta instanceof Poupanca) {
          return `${conta.numero}; ${conta.saldo.toFixed(2)}; CP; ${conta["_taxaDeJuros"]}`;
        } else if (conta instanceof ContaImposto) {
          return `${conta.numero}; ${conta.saldo.toFixed(2)}; CI; ${conta["_taxaDeImposto"]}`;
        } else {
          return `${conta.numero}; ${conta.saldo.toFixed(2)}; C`;
        }
      }).join("\n");

      fs.writeFileSync(caminhoArquivo, conteudo, "utf-8");
      console.log("Contas salvas no arquivo com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar contas no arquivo:", err);
    }
  }
}

// Função para exibir o menu
function exibirMenu(): void {
  console.log("\n--- Menu ---");
  console.log("1. Inserir Conta");
  console.log("2. Listar Contas");
  console.log("3. Render Juros");
  console.log("4. Carregar Contas de Arquivo");
  console.log("5. Salvar Contas no Arquivo");
  console.log("6. Sair");
}

// Criando uma instância do banco
const banco = new Banco();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função principal
function main(): void {
  exibirMenu();
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o número da conta: ", (numero) => {
          rl.question("Digite o saldo inicial: ", (saldoStr) => {
            rl.question("É uma poupança ou conta imposto? (CP/CI/N): ", (tipo) => {
              if (tipo.toUpperCase() === "CP") {
                rl.question("Digite a taxa de juros: ", (taxaStr) => {
                  const conta = new Poupanca(numero, parseFloat(saldoStr), parseFloat(taxaStr));
                  banco.inserirConta(conta);
                  console.log("Conta poupança inserida com sucesso!");
                  main();
                });
              } else if (tipo.toUpperCase() === "CI") {
                rl.question("Digite a taxa de imposto: ", (taxaStr) => {
                  const conta = new ContaImposto(numero, parseFloat(saldoStr), parseFloat(taxaStr));
                  banco.inserirConta(conta);
                  console.log("Conta imposto inserida com sucesso!");
                  main();
                });
              } else {
                const conta = new Conta(numero, parseFloat(saldoStr));
                banco.inserirConta(conta);
                console.log("Conta comum inserida com sucesso!");
                main();
              }
            });
          });
        });
        break;
      case "2":
        banco.listarContas();
        main();
        break;
      case "3":
        rl.question("Digite o número da conta para render juros: ", (numero) => {
          const conta = banco.consultarConta(numero);
          if (conta instanceof Poupanca) {
            conta.renderJuros();
            console.log(`Juros renderizados para a conta ${numero}.`);
          } else {
            console.log("Conta não é poupança ou não existe.");
          }
          main();
        });
        break;
      case "4":
        rl.question("Digite o caminho do arquivo: ", (caminho) => {
          banco.carregarContasDeArquivo(caminho);
          main();
        });
        break;
      case "5":
        rl.question("Digite o caminho do arquivo para salvar as contas: ", (caminho) => {
          banco.salvarContasNoArquivo(caminho);
          main();
        });
        break;
      case "6":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        main();
    }
  });
}

// Iniciar o programa
main();