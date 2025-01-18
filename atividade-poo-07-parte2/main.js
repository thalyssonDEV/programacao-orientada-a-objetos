"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valorUnitario) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    // Método para repor
    Produto.prototype.repor = function (qtde) {
        this.quantidade += qtde;
    };
    // Método para dar baixa
    Produto.prototype.darBaixa = function (qtde) {
        if (qtde > this.quantidade) {
            console.log("Não há quantidade suficiente para dar baixa.");
        }
        else {
            this.quantidade -= qtde;
        }
    };
    Produto.prototype.getId = function () {
        return this.id;
    };
    Produto.prototype.getDescricao = function () {
        return this.descricao;
    };
    Produto.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Produto.prototype.getValorUnitario = function () {
        return this.valorUnitario;
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(id, descricao, quantidade, valorUnitario, dataValidade) {
        var _this = _super.call(this, id, descricao, quantidade, valorUnitario) || this;
        _this.dataValidade = dataValidade;
        return _this;
    }
    // Sobrescrita do método repor
    ProdutoPerecivel.prototype.repor = function (qtde) {
        if (!this.isValido()) {
            console.log("Não é possível repor, o produto está vencido.");
        }
        else {
            _super.prototype.repor.call(this, qtde);
        }
    };
    // Sobrescrita do método dar baixa
    ProdutoPerecivel.prototype.darBaixa = function (qtde) {
        if (!this.isValido()) {
            console.log("Não é possível dar baixa, o produto está vencido.");
        }
        else {
            _super.prototype.darBaixa.call(this, qtde);
        }
    };
    // Verificar se o produto está dentro da validade
    ProdutoPerecivel.prototype.isValido = function () {
        var hoje = new Date();
        return this.dataValidade >= hoje;
    };
    ProdutoPerecivel.prototype.getDataValidade = function () {
        return this.dataValidade;
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this.produtos = [];
    }
    // Método para verificar se existe produto com o mesmo ID ou descrição
    Estoque.prototype.existe = function (id, descricao) {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.getId() === id || produto.getDescricao() === descricao) {
                return true;
            }
        }
        return false;
    };
    // Método para inserir produto
    Estoque.prototype.incluir = function (produto) {
        if (this.existe(produto.getId(), produto.getDescricao())) {
            console.log("Produto com o mesmo ID ou descrição já existe.");
        }
        else {
            this.produtos.push(produto);
            console.log("Produto incluído com sucesso.");
        }
    };
    // Método para consultar produto pelo ID
    Estoque.prototype.consultar = function (id) {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.getId() === id) {
                return produto;
            }
        }
        return undefined;
    };
    // Método para excluir produto pelo ID
    Estoque.prototype.excluir = function (id) {
        var index = -1;
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getId() === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            console.log("Produto não encontrado.");
        }
        else {
            this.produtos.splice(index, 1);
            console.log("Produto excluído com sucesso.");
        }
    };
    // Método para repor produto
    Estoque.prototype.repor = function (id, qtde) {
        var produto = this.consultar(id);
        if (produto) {
            if (produto instanceof ProdutoPerecivel && !produto.isValido()) {
                console.log("Produto perecível está vencido, não pode ser reposto.");
            }
            else {
                produto.repor(qtde);
            }
        }
        else {
            console.log("Produto não encontrado.");
        }
    };
    // Método para dar baixa no produto
    Estoque.prototype.darBaixa = function (id, qtde) {
        var produto = this.consultar(id);
        if (produto) {
            if (produto instanceof ProdutoPerecivel && !produto.isValido()) {
                console.log("Produto perecível está vencido, não pode ter baixa.");
            }
            else {
                produto.darBaixa(qtde);
            }
        }
        else {
            console.log("Produto não encontrado.");
        }
    };
    // Método para listar produtos perecíveis vencidos
    Estoque.prototype.listarProdutosPereciveisVencidos = function () {
        var hoje = new Date();
        var vencidos = [];
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto instanceof ProdutoPerecivel && produto.getDataValidade() < hoje) {
                vencidos.push(produto);
            }
        }
        if (vencidos.length > 0) {
            console.log("Produtos perecíveis vencidos:");
            vencidos.forEach(function (produto) { return console.log("ID: ".concat(produto.getId(), ", Descri\u00E7\u00E3o: ").concat(produto.getDescricao())); });
        }
        else {
            console.log("Não há produtos perecíveis vencidos.");
        }
    };
    // Função para menu de opções
    Estoque.prototype.menu = function () {
        var opcao;
        do {
            console.log("\nMenu:");
            console.log("1. Inserir produto");
            console.log("2. Consultar produto por ID");
            console.log("3. Excluir produto");
            console.log("4. Repor produto");
            console.log("5. Dar baixa em produto");
            console.log("6. Listar produtos perecíveis vencidos");
            console.log("7. Sair");
            opcao = (0, readline_sync_1.question)("Escolha uma opção: ");
            switch (opcao) {
                case "1":
                    var idInserir = (0, readline_sync_1.questionInt)("Digite o ID do produto: ");
                    var descricaoInserir = (0, readline_sync_1.question)("Digite a descrição do produto: ");
                    var quantidadeInserir = (0, readline_sync_1.questionInt)("Digite a quantidade do produto: ");
                    var valorUnitarioInserir = (0, readline_sync_1.questionFloat)("Digite o valor unitário do produto: ");
                    var produtoInserir = new Produto(idInserir, descricaoInserir, quantidadeInserir, valorUnitarioInserir);
                    this.incluir(produtoInserir);
                    break;
                case "2":
                    var idConsultar = (0, readline_sync_1.questionInt)("Digite o ID do produto para consultar: ");
                    var produtoConsultado = this.consultar(idConsultar);
                    if (produtoConsultado) {
                        console.log("Produto encontrado: ID: ".concat(produtoConsultado.getId(), ", Descri\u00E7\u00E3o: ").concat(produtoConsultado.getDescricao(), ", Quantidade: ").concat(produtoConsultado.getQuantidade(), ", Valor Unit\u00E1rio: ").concat(produtoConsultado.getValorUnitario()));
                    }
                    else {
                        console.log("Produto não encontrado.");
                    }
                    break;
                case "3":
                    var idExcluir = (0, readline_sync_1.questionInt)("Digite o ID do produto para excluir: ");
                    this.excluir(idExcluir);
                    break;
                case "4":
                    var idRepor = (0, readline_sync_1.questionInt)("Digite o ID do produto para repor: ");
                    var qtdeRepor = (0, readline_sync_1.questionInt)("Digite a quantidade a ser reposta: ");
                    this.repor(idRepor, qtdeRepor);
                    break;
                case "5":
                    var idDarBaixa = (0, readline_sync_1.questionInt)("Digite o ID do produto para dar baixa: ");
                    var qtdeDarBaixa = (0, readline_sync_1.questionInt)("Digite a quantidade a ser dada baixa: ");
                    this.darBaixa(idDarBaixa, qtdeDarBaixa);
                    break;
                case "6":
                    this.listarProdutosPereciveisVencidos();
                    break;
                case "7":
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        } while (opcao !== "7");
    };
    return Estoque;
}());
// Exemplo de uso
var estoque = new Estoque();
estoque.menu();
