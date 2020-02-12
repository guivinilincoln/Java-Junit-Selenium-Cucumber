$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featues/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Locadora",
  "description": "\r\nComo usuario\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entraga",
  "id": "locadora",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "locadora;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 9,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 11
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "que o preço de aluguel seja R$ 3",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o preço do aluguel sera R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o estoque do filme será 1 unidades",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 101223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 2455000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 785200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 1536000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 515900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidades(int)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "locadora;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme será 0 unidades",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 85100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidades(int)"
});
formatter.result({
  "duration": 69700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Deve dar condições conforme tipo de alguel",
  "description": "",
  "id": "locadora;deve-dar-condições-conforme-tipo-de-alguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 25,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "que o preço de aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 30,
  "name": "a data de entrega sera em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "a pontuacao sera de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "locadora;deve-dar-condições-conforme-tipo-de-alguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 34,
      "id": "locadora;deve-dar-condições-conforme-tipo-de-alguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 35,
      "id": "locadora;deve-dar-condições-conforme-tipo-de-alguel;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 35,
  "name": "Deve dar condições conforme tipo de alguel",
  "description": "",
  "id": "locadora;deve-dar-condições-conforme-tipo-de-alguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 25,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 30,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 577200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoSeraDePontos(int)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
});