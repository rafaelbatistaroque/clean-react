export class ErroCredenciaisInvalidas extends Error {
	constructor() {
		super("Credenciais Inválidas");

		this.name = "ErroCredenciaisInvalidas";
	}
}

export class ErroInesperado extends Error {
	constructor() {
		super("Algo deu errado.");

		this.name = "ErroInesperado";
	}
}
