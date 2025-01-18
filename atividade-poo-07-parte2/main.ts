import { question, questionInt, questionFloat } from 'readline-sync';

class Produto {
  private id: number;
  private descricao: string;
  private quantidade: number;
  private valorUnitario: number;

  constructor(id: number, descricao: string, quantidade: number, valorUnitario: number) {
    this.id = id;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
  }

  // Método para repor
  public repor(qtde: number): void {
    this.quantidade += qtde;
  }

  // Método para dar baixa
  public darBaixa(qtde: number): void {
    if (qtde > this.quantidade) {
      console.log("Não há quantidade suficiente para dar baixa.");
    } else {
      this.quantidade -= qtde;
    }
  }

  public getId(): number {
    return this.id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public getValorUnitario(): number {
    return this.valorUnitario;
  }
}

class ProdutoPerecivel extends Produto {
  private dataValidade: Date;

  constructor(id: number, descricao: string, quantidade: number, valorUnitario: number, dataValidade: Date) {
    super(id, descricao, quantidade, valorUnitario);
    this.dataValidade = dataValidade;
  }

  // Sobrescrita do método repor
  public repor(qtde: number): void {
    if (!this.isValido()) {
      console.log("Não é possível repor, o produto está vencido.");
    } else {
      super.repor(qtde);
    }
  }

  // Sobrescrita do método dar baixa
  public darBaixa(qtde: number): void {
    if (!this.isValido()) {
      console.log("Não é possível dar baixa, o produto está vencido.");
    } else {
      super.darBaixa(qtde);
    }
  }

  // Verificar se o produto está dentro da validade
  public isValido(): boolean {
    const hoje = new Date();
    return this.dataValidade >= hoje;
  }

  public getDataValidade(): Date {
    return this.dataValidade;
  }
}

class Estoque {
  private produtos: (Produto | ProdutoPerecivel)[] = [];

  // Método para verificar se existe produto com o mesmo ID ou descrição
  private existe(id: number, descricao: string): boolean {
    for (let produto of this.produtos) {
      if (produto.getId() === id || produto.getDescricao() === descricao) {
        return true;
      }
    }
    return false;
  }

  // Método para inserir produto
  public incluir(produto: Produto | ProdutoPerecivel): void {
    if (this.existe(produto.getId(), produto.getDescricao())) {
      console.log("Produto com o mesmo ID ou descrição já existe.");
    } else {
      this.produtos.push(produto);
      console.log("Produto incluído com sucesso.");
    }
  }

  // Método para consultar produto pelo ID
  public consultar(id: number): Produto | ProdutoPerecivel | undefined {
    for (let produto of this.produtos) {
      if (produto.getId() === id) {
        return produto;
      }
    }
    return undefined;
  }

  // Método para excluir produto pelo ID
  public excluir(id: number): void {
    let index = -1;
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].getId() === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      console.log("Produto não encontrado.");
    } else {
      this.produtos.splice(index, 1);
      console.log("Produto excluído com sucesso.");
    }
  }

  // Método para repor produto
  public repor(id: number, qtde: number): void {
    const produto = this.consultar(id);
    if (produto) {
      if (produto instanceof ProdutoPerecivel && !produto.isValido()) {
        console.log("Produto perecível está vencido, não pode ser reposto.");
      } else {
        produto.repor(qtde);
      }
    } else {
      console.log("Produto não encontrado.");
    }
  }

  // Método para dar baixa no produto
  public darBaixa(id: number, qtde: number): void {
    const produto = this.consultar(id);
    if (produto) {
      if (produto instanceof ProdutoPerecivel && !produto.isValido()) {
        console.log("Produto perecível está vencido, não pode ter baixa.");
      } else {
        produto.darBaixa(qtde);
      }
    } else {
      console.log("Produto não encontrado.");
    }
  }

  // Método para listar produtos perecíveis vencidos
  public listarProdutosPereciveisVencidos(): void {
    const hoje = new Date();
    const vencidos: ProdutoPerecivel[] = [];
    for (let produto of this.produtos) {
      if (produto instanceof ProdutoPerecivel && produto.getDataValidade() < hoje) {
        vencidos.push(produto);
      }
    }

    if (vencidos.length > 0) {
      console.log("Produtos perecíveis vencidos:");
      vencidos.forEach(produto => console.log(`ID: ${produto.getId()}, Descrição: ${produto.getDescricao()}`));
    } else {
      console.log("Não há produtos perecíveis vencidos.");
    }
  }

  // Função para menu de opções
  public menu(): void {
    let opcao: string;
    do {
      console.log("\nMenu:");
      console.log("1. Inserir produto");
      console.log("2. Consultar produto por ID");
      console.log("3. Excluir produto");
      console.log("4. Repor produto");
      console.log("5. Dar baixa em produto");
      console.log("6. Listar produtos perecíveis vencidos");
      console.log("7. Sair");
      opcao = question("Escolha uma opção: ");

      switch (opcao) {
        case "1":
          const idInserir = questionInt("Digite o ID do produto: ");
          const descricaoInserir = question("Digite a descrição do produto: ");
          const quantidadeInserir = questionInt("Digite a quantidade do produto: ");
          const valorUnitarioInserir = questionFloat("Digite o valor unitário do produto: ");
          const produtoInserir = new Produto(idInserir, descricaoInserir, quantidadeInserir, valorUnitarioInserir);
          this.incluir(produtoInserir);
          break;

        case "2":
          const idConsultar = questionInt("Digite o ID do produto para consultar: ");
          const produtoConsultado = this.consultar(idConsultar);
          if (produtoConsultado) {
            console.log(`Produto encontrado: ID: ${produtoConsultado.getId()}, Descrição: ${produtoConsultado.getDescricao()}, Quantidade: ${produtoConsultado.getQuantidade()}, Valor Unitário: ${produtoConsultado.getValorUnitario()}`);
          } else {
            console.log("Produto não encontrado.");
          }
          break;

        case "3":
          const idExcluir = questionInt("Digite o ID do produto para excluir: ");
          this.excluir(idExcluir);
          break;

        case "4":
          const idRepor = questionInt("Digite o ID do produto para repor: ");
          const qtdeRepor = questionInt("Digite a quantidade a ser reposta: ");
          this.repor(idRepor, qtdeRepor);
          break;

        case "5":
          const idDarBaixa = questionInt("Digite o ID do produto para dar baixa: ");
          const qtdeDarBaixa = questionInt("Digite a quantidade a ser dada baixa: ");
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
  }
}

const estoque = new Estoque();
estoque.menu();