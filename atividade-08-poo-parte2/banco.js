// 1) Classes de exceção
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "AplicacaoError";
        return _this;
    }
    return AplicacaoError;
}(Error));
var ContaInexistenteError = /** @class */ (function (_super) {
    __extends(ContaInexistenteError, _super);
    function ContaInexistenteError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ContaInexistenteError";
        return _this;
    }
    return ContaInexistenteError;
}(AplicacaoError));
var ClienteNaoEncontradoError = /** @class */ (function (_super) {
    __extends(ClienteNaoEncontradoError, _super);
    function ClienteNaoEncontradoError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ClienteNaoEncontradoError";
        return _this;
    }
    return ClienteNaoEncontradoError;
}(AplicacaoError));
var SaldoInsuficienteError = /** @class */ (function (_super) {
    __extends(SaldoInsuficienteError, _super);
    function SaldoInsuficienteError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "SaldoInsuficienteError";
        return _this;
    }
    return SaldoInsuficienteError;
}(AplicacaoError));
var ValorInvalidoError = /** @class */ (function (_super) {
    __extends(ValorInvalidoError, _super);
    function ValorInvalidoError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValorInvalidoError";
        return _this;
    }
    return ValorInvalidoError;
}(AplicacaoError));
var PoupancaInvalidaError = /** @class */ (function (_super) {
    __extends(PoupancaInvalidaError, _super);
    function PoupancaInvalidaError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "PoupancaInvalidaError";
        return _this;
    }
    return PoupancaInvalidaError;
}(AplicacaoError));
// 7) Classe Cliente com validações de CPF e data de nascimento
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
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
    Cliente.validarCPF = function (cpf) {
        var cpfLimpo = cpf.replace(/\D/g, "");
        return cpfLimpo.length === 11;
    };
    // Validação: a data de nascimento não pode ser no futuro
    Cliente.validarDataNascimento = function (data) {
        return data < new Date();
    };
    return Cliente;
}());
// 4) Classe Conta (classe base) – o saldo inicial é atribuído pelo método depositar
// 5) Método privado validarValor para evitar duplicação de código
var Conta = /** @class */ (function () {
    function Conta(numero, cliente, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this._saldo = 0;
        this.numero = numero;
        this.cliente = cliente;
        // O saldo inicial é atribuído utilizando o método depositar
        if (saldoInicial > 0) {
            this.depositar(saldoInicial);
        }
    }
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    // Método privado para validar se o valor é maior que zero
    Conta.prototype.validarValor = function (valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor inválido. Deve ser maior que zero.");
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this._saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        if (valor > this._saldo) {
            throw new SaldoInsuficienteError("Saldo insuficiente para saque.");
        }
        this._saldo -= valor;
    };
    return Conta;
}());
// Classes derivadas de Conta – exemplo: ContaCorrente e ContaPoupanca
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContaCorrente;
}(Conta));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Método para render juros. A taxa deve ser maior que zero.
    ContaPoupanca.prototype.renderJuros = function (taxa) {
        if (taxa <= 0) {
            throw new ValorInvalidoError("Taxa de juros inválida. Deve ser maior que zero.");
        }
        // Exemplo: adiciona os juros calculados ao saldo
        this._saldo += this._saldo * (taxa / 100);
    };
    return ContaPoupanca;
}(Conta));
// 2) Classe Banco com métodos de consulta e operações sem utilizar find, findIndex ou some
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
    }
    // Consulta uma conta pelo número utilizando loop; se não encontrada, lança exceção.
    Banco.prototype.consultar = function (numero) {
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return this.contas[i];
            }
        }
        throw new ContaInexistenteError("Conta ".concat(numero, " n\u00E3o encontrada."));
    };
    // Retorna o índice da conta no array utilizando um loop; se não encontrada, lança exceção.
    Banco.prototype.consultarPorIndice = function (numero) {
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return i;
            }
        }
        throw new ContaInexistenteError("Conta ".concat(numero, " n\u00E3o encontrada."));
    };
    // Consulta um cliente pelo CPF utilizando loop; se não encontrado, lança exceção.
    Banco.prototype.consultarCliente = function (cpf) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].cpf === cpf) {
                return this.clientes[i];
            }
        }
        throw new ClienteNaoEncontradoError("Cliente com CPF ".concat(cpf, " n\u00E3o encontrado."));
    };
    // Retorna o índice do cliente no array utilizando um loop; se não encontrado, lança exceção.
    Banco.prototype.consultarClientePorIndice = function (cpf) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].cpf === cpf) {
                return i;
            }
        }
        throw new ClienteNaoEncontradoError("Cliente com CPF ".concat(cpf, " n\u00E3o encontrado."));
    };
    // Adiciona um cliente, validando duplicidade sem utilizar "some"
    Banco.prototype.adicionarCliente = function (cliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].cpf === cliente.cpf) {
                throw new AplicacaoError("Cliente com CPF ".concat(cliente.cpf, " j\u00E1 existe."));
            }
        }
        this.clientes.push(cliente);
    };
    // Adiciona uma conta, garantindo que:
    // (a) o número da conta não esteja duplicado e
    // (b) um cliente não possua mais de uma conta.
    Banco.prototype.adicionarConta = function (conta) {
        // Verifica duplicidade de número da conta
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === conta.numero) {
                throw new AplicacaoError("Conta ".concat(conta.numero, " j\u00E1 existe."));
            }
        }
        // Verifica se o cliente já possui uma conta
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].cliente.cpf === conta.cliente.cpf) {
                throw new AplicacaoError("Cliente com CPF ".concat(conta.cliente.cpf, " j\u00E1 possui uma conta."));
            }
        }
        this.contas.push(conta);
    };
    // Atualiza os dados de uma conta já existente.
    Banco.prototype.alterarConta = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        this.contas[indice] = conta;
    };
    // 3) Operações sem necessidade de condicionais extras, pois as exceções já são lançadas nos métodos de consulta.
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        conta.depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        conta.sacar(valor);
    };
    Banco.prototype.transferir = function (origem, destino, valor) {
        var contaOrigem = this.consultar(origem);
        var contaDestino = this.consultar(destino);
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
    };
    // 6) Render juros somente para conta poupança; caso não seja, lança exceção.
    Banco.prototype.renderJuros = function (numero, taxa) {
        var conta = this.consultar(numero);
        if (!(conta instanceof ContaPoupanca)) {
            throw new PoupancaInvalidaError("Conta não é poupança para render juros.");
        }
        conta.renderJuros(taxa);
    };
    return Banco;
}());
// 8) Classe App – simula a entrada de dados, realiza validações e trata as exceções para que o programa não seja abortado.
var App = /** @class */ (function () {
    function App(banco) {
        this.banco = banco;
    }
    App.prototype.executar = function () {
        try {
            // Criação de um cliente e conta (as validações ocorrem na criação dos objetos)
            var cliente1 = new Cliente("João Silva", "12345678901", new Date(1990, 5, 15));
            this.banco.adicionarCliente(cliente1);
            // Ao criar a conta, o saldo inicial é definido via método depositar
            var conta1 = new ContaCorrente("001", cliente1, 100);
            this.banco.adicionarConta(conta1);
            // Operações: depósito, saque e transferência
            this.banco.depositar("001", 50);
            console.log("Saldo ap\u00F3s dep\u00F3sito: ".concat(this.banco.consultar("001").saldo));
            this.banco.sacar("001", 20);
            console.log("Saldo ap\u00F3s saque: ".concat(this.banco.consultar("001").saldo));
            // Exemplo de transferência (aqui, transferindo para a própria conta apenas para demonstração)
            this.banco.transferir("001", "001", 10);
            console.log("Saldo ap\u00F3s transfer\u00EAncia: ".concat(this.banco.consultar("001").saldo));
            // Tenta render juros – como a conta é do tipo ContaCorrente, uma exceção é esperada.
            try {
                this.banco.renderJuros("001", 2);
            }
            catch (e) {
                if (e instanceof PoupancaInvalidaError) {
                    console.warn("Render juros:", e.message);
                }
                else {
                    throw e;
                }
            }
            // Cria um novo cliente e uma conta poupança (cada cliente pode ter apenas uma conta)
            var cliente2 = new Cliente("Maria Oliveira", "98765432100", new Date(1985, 10, 20));
            this.banco.adicionarCliente(cliente2);
            var contaPoupanca = new ContaPoupanca("002", cliente2, 200);
            this.banco.adicionarConta(contaPoupanca);
            // Render juros na conta poupança (operação bem-sucedida)
            this.banco.renderJuros("002", 3);
            console.log("Saldo da poupan\u00E7a ap\u00F3s juros: ".concat(this.banco.consultar("002").saldo));
        }
        catch (error) {
            if (error instanceof AplicacaoError) {
                console.error("Erro de aplicação:", error.message);
            }
            else {
                console.error("Erro inesperado:", error);
            }
        }
    };
    return App;
}());
// Execução da aplicação
var banco = new Banco();
var app = new App(banco);
app.executar();
