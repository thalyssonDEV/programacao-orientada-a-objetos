import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

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
        const juros = this.saldo * this._taxaDeJuros / 100;
        this.depositar(juros);
    }
}

class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }

    public debitarImposto(): void {
        const desconto = this.saldo * this._taxaDeDesconto / 100;
        this.sacar(desconto);
    }
}

class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    public inserirConta(conta: Conta): void {
        this._contas.push(conta);
    }

    public listarContas(): Conta[] {
        return this._contas;
    }

    public salvarContasNoArquivo(): void {
        const linhas: string[] = this._contas.map((conta) => {
            if (conta instanceof Poupanca) {
                return `${conta.numero}; ${conta.saldo}; CP; ${conta["_taxaDeJuros"]}`;
            } else if (conta instanceof ContaImposto) {
                return `${conta.numero}; ${conta.saldo}; CI; ${conta["_taxaDeDesconto"]}`;
            } else {
                return `${conta.numero}; ${conta.saldo}; C`;
            }
        });

        fs.writeFileSync("contas.txt", linhas.join("\n"), "utf-8");
        console.log("Contas salvas no arquivo com sucesso!");
    }

    public carregarContasDoArquivo(): void {
        if (!fs.existsSync("contas.txt")) {
            console.log("Arquivo contas.txt não encontrado.");
            return;
        }

        const linhas = fs.readFileSync("contas.txt", "utf-8").split("\n");

        for (const linha of linhas) {
            const campos = linha.split(";").map((campo) => campo.trim());
            const numero = campos[0];
            const saldo = parseFloat(campos[1]);
            const tipo = campos[2];

            if (tipo === "CP") {
                const taxaDeJuros = parseFloat(campos[3]);
                this.inserirConta(new Poupanca(numero, saldo, taxaDeJuros));
            } else if (tipo === "CI") {
                const taxaDeDesconto = parseFloat(campos[3]);
                this.inserirConta(new ContaImposto(numero, saldo, taxaDeDesconto));
            } else {
                this.inserirConta(new Conta(numero, saldo));
            }
        }
        console.log("Contas carregadas do arquivo com sucesso!");
    }
}

const banco = new Banco();

function exibirMenu(): void {
    console.log("\n=== MENU ===");
    console.log("1. Carregar contas do arquivo");
    console.log("2. Salvar contas no arquivo");
    console.log("3. Listar contas");
    console.log("4. Adicionar conta");
    console.log("5. Sacar de uma conta");
    console.log("6. Depositar em uma conta");
    console.log("7. Transferir entre contas");
    console.log("8. Render Juros de Poupança");
    console.log("0. Sair");
}

function executarMenu(): void {
    let opcao: string;
    do {
        exibirMenu();
        opcao = readlineSync.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                banco.carregarContasDoArquivo();
                break;
            case "2":
                banco.salvarContasNoArquivo();
                break;
            case "3":
                console.log(banco.listarContas());
                break;
            case "4":
                const tipoConta = readlineSync.question("Digite o tipo da conta (C - Comum, CP - Poupança, CI - Conta Imposto): ");
                const numero = readlineSync.question("Digite o número da conta: ");
                const saldo = parseFloat(readlineSync.question("Digite o saldo inicial: "));
                if (tipoConta === "CP") {
                    const taxaDeJuros = parseFloat(readlineSync.question("Digite a taxa de juros: "));
                    banco.inserirConta(new Poupanca(numero, saldo, taxaDeJuros));
                } else if (tipoConta === "CI") {
                    const taxaDeDesconto = parseFloat(readlineSync.question("Digite a taxa de desconto: "));
                    banco.inserirConta(new ContaImposto(numero, saldo, taxaDeDesconto));
                } else {
                    banco.inserirConta(new Conta(numero, saldo));
                }
                break;
            case "5":
                const numSacar = readlineSync.question("Digite o número da conta para sacar: ");
                const valorSacar = parseFloat(readlineSync.question("Digite o valor a ser sacado: "));
                const contaSacar = banco.listarContas().find(conta => conta.numero === numSacar);
                if (contaSacar) {
                    contaSacar.sacar(valorSacar);
                    console.log(`Saque de R$${valorSacar} realizado com sucesso!`);
                } else {
                    console.log("Conta não encontrada.");
                }
                break;
            case "6":
                const numDepositar = readlineSync.question("Digite o número da conta para depositar: ");
                const valorDepositar = parseFloat(readlineSync.question("Digite o valor a ser depositado: "));
                const contaDepositar = banco.listarContas().find(conta => conta.numero === numDepositar);
                if (contaDepositar) {
                    contaDepositar.depositar(valorDepositar);
                    console.log(`Depósito de R$${valorDepositar} realizado com sucesso!`);
                } else {
                    console.log("Conta não encontrada.");
                }
                break;
            case "7":
                const numOrigem = readlineSync.question("Digite o número da conta de origem: ");
                const numDestino = readlineSync.question("Digite o número da conta de destino: ");
                const valorTransferir = parseFloat(readlineSync.question("Digite o valor a ser transferido: "));
                const contaOrigem = banco.listarContas().find(conta => conta.numero === numOrigem);
                const contaDestino = banco.listarContas().find(conta => conta.numero === numDestino);
                if (contaOrigem && contaDestino) {
                    contaOrigem.sacar(valorTransferir);
                    contaDestino.depositar(valorTransferir);
                    console.log(`Transferência de R$${valorTransferir} realizada com sucesso!`);
                } else {
                    console.log("Uma ou ambas as contas não foram encontradas.");
                }
                break;
            case "8":
                const numPoupanca = readlineSync.question("Digite o número da conta poupança para render juros: ");
                const contaPoupanca = banco.listarContas().find(conta => conta.numero === numPoupanca && conta instanceof Poupanca);
                if (contaPoupanca) {
                    contaPoupanca.renderJuros();
                    console.log("Juros rendidos com sucesso!");
                } else {
                    console.log("Conta não encontrada ou não é uma poupança.");
                }
                break;
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "0");
}

executarMenu();
