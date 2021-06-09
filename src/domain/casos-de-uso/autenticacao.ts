import { AutenticacaoParams } from './../../shared/types';
import {AccontModel} from "domain/models/AccontModel";

export interface IAutenticacao {
    autenticar(params:AutenticacaoParams):Promise<AccontModel>;
}