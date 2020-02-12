# language: pt
Funcionalidade: Locadora
  
  Como usuario
  Eu quero cadastrar aluguéis de filmes
  Para controlar preços e datas de entraga

  Cenario: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E que o preço de aluguel seja R$ 3
    Quando alugar
    Então o preço do aluguel sera R$ 3
    E a data de entrega será em 1 dia
    E o estoque do filme será 1 unidades

  Cenario: Não deve alugar filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então não será possível por falta de estoque
    E o estoque do filme será 0 unidades

  Cenario: Deve dar condições especiais para categoria extendida
    Dado um filme com estoque de 2 unidades
    E que o preço de aluguel seja R$ 4
    E que o tipo do aluguel seja extendido
    Quando alugar
    Então o preço do aluguel sera R$ 8
    E a data de entrega sera em 3 dias
    E a pontuação sera de 2 pontos
