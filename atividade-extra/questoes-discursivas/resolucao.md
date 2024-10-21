## 1. Diferença entre Classe e Objeto

A diferença entre uma classe e um objeto é que a classe é como um molde ou uma receita que define as características e comportamentos de um tipo de objeto, enquanto o objeto é uma instância concreta dessa classe. A classe estabelece quais atributos e métodos o objeto terá, mas o objeto em si possui valores específicos para esses atributos.

### Exemplo do Mundo Real

- **Classe: Carro**
  - **Atributos:** modelo, cor, ano, marca
  - **Métodos:** acelerar(), frear(), buzinar()

- **Objetos:**
  - **Fusca:** modelo "Fusca", cor "azul", ano 1975, marca "Volkswagen"
  - **Civic:** modelo "Civic", cor "preto", ano 2020, marca "Honda"

Assim, "Carro" é a classe que define as características gerais, enquanto "Fusca" e "Civic" são instâncias específicas dessa classe.

---

## 2. Atributos e Métodos

Atributos são as características ou propriedades que descrevem um objeto e armazenam informações sobre o seu estado. Por outro lado, métodos são as funções ou ações que um objeto pode realizar, definindo como ele se comporta.

### Exemplo

**Classe: ContaBancária**
- **Atributos:**
  - númeroDaConta
  - saldo
  - titular
- **Métodos:**
  - depositar(valor)
  - sacar(valor)
  - consultarSaldo()

---

## 3. Atributos e Contexto

A abstração visa focar no que é importante para um sistema. E um atributo de uma pessoa pode ser importante ou não dependendo do contexto do sistema.

### Contextos/Sistemas

| Atributo               | Sistema em que não é importante      | Sistema em que é moderadamente importante      | Sistema em que é essencial          |
|------------------------|--------------------------------------|------------------------------------------------|-------------------------------------|
| **CPF**                | Rede social                          | Plataforma de e-commerce                       | Sistema de identificação governamental |
| **Histórico de saúde** | Jogos                                | Plataforma de bem-estar                        | Sistema de saúde e assistência médica |
| **Quantidade de seguidores** | Sistema de saúde               | Plataforma de e-learning                       | Rede social                          |
| **Habilidade destra**  | Aplicativo de música                 | Plataforma de aprendizado de habilidades       | Sistema de reabilitação física       |
| **Endereço**           | Jogos                                | Aplicativo de entrega                          | Sistema de gestão imobiliária        |
| **Saldo em conta**     | Rede social                          | Aplicativo de controle financeiro              | Sistema bancário                    |
| **Etnia**              | Jogos                                | Pesquisa de mercado                           | Sistema de saúde e assistência social |

---

## 4. Objetos Pessoa e Conta

### a. Atributo "Pessoa" em "Conta"

Seria essencial que um objeto "Conta" tivesse um objeto "Pessoa" como um atributo interno para representar o titular da conta. Isso ajudaria a conectar as informações da conta com as informações do titular, como nome e CPF, facilitando a gestão das contas no sistema bancário.

### b. Atributo "Conta" em "Pessoa"

Seria essencial que uma "Pessoa" pudesse ter mais de uma "Conta" como atributo. Isso é comum, pois muitas pessoas têm diferentes tipos de contas, como conta corrente e conta poupança. O elemento da programação que melhor representaria o conjunto de contas de uma pessoa seria uma coleção, como um array ou uma lista. Assim, poderíamos armazenar várias instâncias do objeto "Conta" associadas a uma única "Pessoa".

---

## 5. Objetos em um Sistema de Controle Acadêmico

Além dos já citados, podemos identificar os seguintes objetos em um sistema de controle acadêmico:

- **Matriz Curricular**
- **Calendário Acadêmico**
- **Notas**
- **Frequência**
- **Relatório de Desempenho**

---

## 6. Jogo de Futebol - Objetos, Atributos e Métodos

### Objetos

1. **Partida**
   - **Atributos:**
     - duração
     - local
     - tipo (amistoso, campeonato)
     - placar (time1, time2)
     - data e hora
     - árbitro
   - **Métodos:**
     - iniciarPartida()
     - pausarPartida()
     - adicionarJogador(time, jogador)
     - removerJogador(time, jogador)
     - finalizarPartida()
     - atualizarPlacar(golsTime1, golsTime2)

2. **Time**
   - **Atributos:**
     - nome
     - quantidade de jogadores
     - cor do uniforme
     - técnico
     - jogadores (lista de objetos "Jogador")
   - **Métodos:**
     - adicionarJogador(jogador)
     - removerJogador(jogador)
     - escalarTime()
     - substituirJogador(jogadorSaindo, jogadorEntrando)

3. **Jogador**
   - **Atributos:**
     - nome
     - número da camisa
     - posição (atacante, zagueiro, etc.)
     - cartões (amarelo, vermelho)
     - estatísticas (gols, assistências)
   - **Métodos:**
     - marcarGol()
     - receberCartão(tipo)
     - fazerAssistencia()
     - atualizarEstatísticas()
