package br.lincoln.runnes;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/featues/", glue = "br.lincoln.steps", tags = { "@funcionais" }, plugin = {
		"pretty", "html:target/report-html",
		"json:target/report.json" }, monochrome = false, snippets = SnippetType.CAMELCASE, dryRun = false, strict = false)
public class RunnerFuncionaisTest {
	private static WebDriver driver;

	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver",
				"E:\\Program Files\\dev\\drivers\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
		driver.findElement(By.id("email")).sendKeys("teste@teste.com.brr");
		driver.findElement(By.id("senha")).sendKeys("teste@teste");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
}
