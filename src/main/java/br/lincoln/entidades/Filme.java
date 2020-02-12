package br.lincoln.entidades;

public class Filme {
	
	private int estoque = 0;
	private int alguel;
	
	public void setEstoque(int arg1) {
		this.estoque = arg1;
	}

	public void setAlguel(int arg1) {
		this.alguel = arg1;		
	}

	public int getAlguel() {
		return alguel;
	}

	public int getEstoque() {
		return estoque;
	}

}
