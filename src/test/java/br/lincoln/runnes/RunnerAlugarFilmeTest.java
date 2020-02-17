package br.lincoln.runnes;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/featues/alugar_filme.feature",
		glue = "br.lincoln.steps",
		tags = {}, 
		plugin = {"pretty","html:target/report-html", "json:target/report.json"},
		monochrome = false, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false, 
		strict = false
)
public class RunnerAlugarFilmeTest {

}
