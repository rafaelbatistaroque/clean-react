import { HttpPostParams } from './../../shared/types';
import { IHttpPostServico } from '../../business/protocols/http-post-servico';

export class HttpPostServicoSpy implements IHttpPostServico{
    url?:string
    async post(params:HttpPostParams): Promise<void> {
       this.url = params.url;

       return Promise.resolve();
    }

}