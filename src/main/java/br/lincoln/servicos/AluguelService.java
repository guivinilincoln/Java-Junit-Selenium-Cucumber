package br.lincoln.servicos;

import br.lincoln.entidades.Filme;
import br.lincoln.entidades.NotaAluguel;
import br.lincoln.entidades.utils.DateUtils;

public class AluguelService {
	public NotaAluguel alugar(Filme filme) {
		if (filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");
		
		NotaAluguel nota = new NotaAluguel();
		nota.setPreco(filme.getAlguel());
		nota.setDataEntrega(DateUtils.obterDataDiferenteDias(1));
		filme.setEstoque(filme.getEstoque() -1);
		return nota;
	}
}
