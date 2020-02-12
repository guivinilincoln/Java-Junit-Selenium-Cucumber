package br.lincoln.servicos;

import br.lincoln.entidades.Filme;
import br.lincoln.entidades.NotaAluguel;
import br.lincoln.entidades.utils.DateUtils;

public class AluguelService {
	public NotaAluguel alugar(Filme filme, String tipoAlguel) {
		if (filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");

		NotaAluguel nota = new NotaAluguel();
		if ("extendido".equals(tipoAlguel)) {
			nota.setPreco(filme.getAlguel() * 2);
			nota.setDataEntrega(DateUtils.obterDataDiferenteDias(3));
			nota.setPontuacao(2);
		} else {
			nota.setPreco(filme.getAlguel());
			nota.setDataEntrega(DateUtils.obterDataDiferenteDias(1));
		}
		filme.setEstoque(filme.getEstoque() - 1);
		return nota;
	}
}
