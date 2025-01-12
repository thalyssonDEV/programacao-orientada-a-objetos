import * as fs from "fs";
import * as readlineSync from "readline-sync";

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
    console.log("0. Sair");
}

function executarMenu(): void {
    let opcao: string;
    do {
        exibirMenu();
        opcao = readlineSync.question("Escolha uma opcao: ");

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
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opcao invalida. Tente novamente.");
        }
    } while (opcao !== "0");
}

executarMenu();