# language: pt

@unitarios
Funcionalidade: Alugar Filme
  
  Como usuario
  Eu quero cadastrar aluguéis de filmes
  Para controlar preços e datas de entraga

  Cenario: Deve alugar um filme com sucesso
    Dado um filme
      | estoque | 2 |
      | preco   | 3 |
    E que o preço de aluguel seja R$ 3
    Quando alugar
    Então o preço do aluguel sera R$ 3
    E a data de entrega sera em 1 dia
    E o estoque do filme será 1 unidades

  Cenario: Não deve alugar filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então não será possível por falta de estoque
    E o estoque do filme será 0 unidades

  Esquema do Cenario: Deve dar condições conforme tipo de alguel
    Dado um filme com estoque de 2 unidades
    E que o preço de aluguel seja R$ <preco>
    E que o tipo do aluguel seja <tipo>
    Quando alugar
    Então o preço do aluguel sera R$ <valor>
    E a data de entrega sera em <qtdDias> dias
    E a pontuacao sera de <pontuacao> pontos

    Exemplos: 
      | preco | tipo      | valor | qtdDias | pontuacao |
      |     4 | extendido |     8 |       3 |         2 |