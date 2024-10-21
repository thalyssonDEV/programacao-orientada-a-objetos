1 - Explique com suas palavras a diferença entre uma classe e um objeto e como
esses dois conceitos se relacionam. Além disso, apresente um exemplo do mundo
real para cada um (por exemplo, usando a classe Carro e instâncias como Fusca e
Civic):

 A diferença entre uma classe e um objeto é que a classe é como um molde ou uma receita
que define as características e comportamentos de um tipo de objeto, enquanto o objeto é uma instância concreta dessa classe.
 A classe estabelece quais atributos e métodos o objeto terá, mas o objeto em si possui valores específicos para esses atributos.
Um exemplo do mundo real seria a classe "Carro".
Nela, teríamos atributos como modelo, cor, ano e marca, além de métodos como acelerar(), frear() e buzinar().
 Os objetos poderiam ser, por exemplo, um "Fusca", que teria atributos como modelo "Fusca", cor "azul", ano 1975 e marca "Volkswagen",
e um "Civic", que teria modelo "Civic", cor "preto", ano 2020 e marca "Honda".
Assim, "Carro" é a classe que define as características gerais, enquanto "Fusca" e "Civic" são instâncias específicas dessa classe.

2 - De forma breve, conceitue atributos e métodos. Pesquise e exemplifique
objetos ou classes que possuam atributos e métodos:

Atributos são as características ou propriedades que descrevem um objeto e armazenam informações sobre o seu estado.
Por outro lado, métodos são as funções ou ações que um objeto pode realizar, definindo como ele se comporta.

Exemplo:

Classe: ContaBancária

* Atributos:

númeroDaConta

saldo

titular

* Métodos:

depositar(valor)

sacar(valor)

consultarSaldo()

3 - A abstração visa focar no que é importante para um sistema. Você concorda que
um atributo de uma pessoa pode ser importante ou não dependendo do contexto
do sistema? Enumere na tabela abaixo contextos/sistemas distintos em que os
atributos abaixo seriam relevantes:

| Atributo               | Sistema em que não é importante      | Sistema em que é moderadamente importante      | Sistema em que é essencial          |
|------------------------|--------------------------------------|------------------------------------------------|-------------------------------------|
| **CPF**                | Rede social            | Plataforma de e-commerce                       | Sistema de identificação governamental |
| **Histórico de saúde** | Jogos                  | Plataforma de bem-estar                        | Sistema de saúde e assistência médica |
| **Quantidade de seguidores** | Sistema de saúde                 | Plataforma de e-learning                       | Rede social            |
| **Habilidade destra**  | Aplicativo de música                 | Plataforma de aprendizado de habilidades       | Sistema de reabilitação física
| **Endereço**           | Jogos                         | Aplicativo de entrega                          | Sistema de gestão imobiliária        |
| **Saldo em conta**     | Rede social                          | Aplicativo de controle financeiro              | Sistema bancário                    |
| **Etnia**              | Jogos                  | Pesquisa de mercado                           | Sistema de saúde e assistência social |

4 - Considerando os objetos Pessoa e Conta:

a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
"pessoa" como um atributo interno representando o titular da conta?

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?

Sim, eu acho que seria interessante que um objeto "Conta" tivesse um objeto "Pessoa" como um atributo interno para representar o titular da conta. Isso ajudaria a conectar as informações da conta com as informações do titular, como nome e CPF, facilitando a gestão das contas no sistema bancário. E também concordo que seria bom que uma "Pessoa" pudesse ter mais de uma "Conta" como atributo. Isso é comum, pois muitas pessoas têm diferentes tipos de contas, como conta corrente e conta poupança. O elemento da programação que melhor representaria o conjunto de contas de uma pessoa seria uma coleção, como um array ou uma lista. Assim, poderíamos armazenar várias instâncias do objeto "Conta" associadas a uma única "Pessoa".

5 - Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.
Professor, disciplina, turma, coordenador, sala:

Além dos já citados nos exemplos, podemos indentificar também os possíveis objetos: Matriz Curricular, Calendário Acadêmico, Notas,
Frequência e Relatório de Desempenho.

6 - Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais
características (atributos) e comportamentos (métodos) que eles poderiam ter.

## Jogo de Futebol - Objetos, Atributos e Métodos

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
     - habilidade
     - cartões (amarelo, vermelho)
     - estatísticas (gols, assistências)
   - **Métodos:**
     - marcarGol()
     - receberCartão(tipo)
     - fazerAssistencia()
     - atualizarEstatísticas()
