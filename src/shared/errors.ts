export class ErroCredenciaisInvalidas extends Error{
    constructor(){
        super('Credenciais Inválidas');

        this.name = "ErroCredenciaisInvalidas";
    }
}