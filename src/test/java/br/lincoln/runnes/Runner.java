package br.lincoln.runnes;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) // Runner do Junit
@CucumberOptions(
		features = "src/test/resources/featues/aprender_cucumber.feature",
		glue = "br.lincoln.steps",
		plugin = "pretty", // faz sair expecificação no console
		monochrome = true, // remove caracteristicas especiais
		snippets = SnippetType.CAMELCASE, // Deixa as especificações no CAMELCASE
		dryRun = false, // quando "true" ele não executa os teste, so valida os steps
		strict = false// quando "true" se um passo quebrar da todo teste com failed
)
public class Runner {

}
