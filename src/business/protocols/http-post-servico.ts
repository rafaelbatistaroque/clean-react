import { HttpPostParams } from './../../shared/types';

export interface IHttpPostServico {
    post(params:HttpPostParams):Promise<void>
}