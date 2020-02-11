# language: pt
Funcionalidade: Apreder Cucumber
  Como um aluno
  Eu quero aprender a utilizar Cucumber
  Para que eu possa automatizar critérios de aceitação

  Cenario: Deve executar especificação
    Dado que criei o arquivo corretamente
    Quando executá-lo
    Então a especificação deve finalizar com sucesso

  Cenario: Deve incrementar contador
    Dado que o valor do contador é 15
    Quando eu incremetar em 3
    Então o valor do contador será 18

  Cenario: Deve calcular atraso no prazo de entrega
    Dado que o prazo é dia 05/04/2018
    Quando a entrega atrasar em 2 dias
    Então a entrega será efetuada em 07/04/2018

  Cenario: Deve calcular atraso no prazo de entrega da china
    Dado que o prazo é dia 05/04/2018
    Quando a entrega atrasar em 2 meses
    Então a entrega será efetuada em 05/06/2018
