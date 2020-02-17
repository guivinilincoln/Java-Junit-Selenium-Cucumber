# language: pt

@unitario
Funcionalidade: Apreder Cucumber
  Como um aluno
  Eu quero aprender a utilizar Cucumber
  Para que eu possa automatizar critérios de aceitação

@tipo1
  Cenario: Deve executar especificação
    Dado que criei o arquivo corretamente
    Quando executá-lo
    Então a especificação deve finalizar com sucesso
@tipo2
  Cenario: Deve incrementar contador
    Dado que o valor do contador é 15
    Quando eu incremetar em 3
    Então o valor do contador será 18
@tipo1 @tipo2
  Cenario: Deve calcular atraso no prazo de entrega
    Dado que o prazo é dia 05/04/2018
    Quando a entrega atrasar em 2 dias
    Então a entrega será efetuada em 07/04/2018
@ignore
  Cenario: Deve calcular atraso no prazo de entrega da china
    Dado que o prazo é dia 05/04/2018
    Quando a entrega atrasar em 2 meses
    Então a entrega será efetuada em 05/06/2018
