package br.lincoln.runnes;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "E:\\Program Files\\dev\\drivers\\chromedriver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
	}
}
