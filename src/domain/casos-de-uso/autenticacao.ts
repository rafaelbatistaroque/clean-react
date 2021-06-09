import {AccontModel} from "domain/models/AccontModel";

type AutenticacaoParams = {
    email:string,
    senha:string
}

export interface IAutenticacao {
    autenticar(params:AutenticacaoParams):Promise<AccontModel>;
}