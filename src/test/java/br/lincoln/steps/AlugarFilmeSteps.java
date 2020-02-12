package br.lincoln.steps;

import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.lincoln.entidades.Filme;
import br.lincoln.entidades.NotaAluguel;
import br.lincoln.servicos.AluguelService;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Então;

public class AlugarFilmeSteps {

	private Filme filme;
	private AluguelService alguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
	}

	@Dado("^que o preço de aluguel seja R\\$ (\\d+)$")
	public void queOPreçoDeAluguelSejaR$(int arg1) throws Throwable {
		filme.setAlguel(arg1);
	}

	@Quando("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota = alguel.alugar(filme);
		} catch (Exception e) {
			erro = e.getMessage();
		}

	}

	@Então("^o preço do aluguel será R\\$ (\\d+)$")
	public void oPreçoDoAluguelSeráR$(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPreco());
	}

	@Então("^a data de entrega será no dia seguinte$")
	public void aDataDeEntregaSeráNoDiaSeguinte() throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 1);

		Date dataRetorno = nota.getDataEntrega();
		Calendar calRetorno = Calendar.getInstance();
		calRetorno.setTime(dataRetorno);

		Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
		Assert.assertEquals(cal.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
		Assert.assertEquals(cal.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));

	}

	@Então("^não será possível por falta de estoque$")
	public void nãoSeráPossívelPorFaltaDeEstoque() throws Throwable {
		Assert.assertEquals("Filme sem estoque", erro);
	}

	@Então("^o estoque do filme será (\\d+) unidades$")
	public void oEstoqueDoFilmeSeráUnidades(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}

	@Dado("^que o tipo do aluguel seja extendido$")
	public void queOTipoDoAluguelSejaExtendido() throws Throwable {
	}

	@Então("^o preço do aluguel sera R\\$ (\\d+)$")
	public void oPreçoDoAluguelSeraR$(int arg1) throws Throwable {
	}

	@Então("^a data de entrega sera em (\\d+) dias$")
	public void aDataDeEntregaSeraEmDias(int arg1) throws Throwable {
	}
}
