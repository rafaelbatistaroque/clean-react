import { IHttpPostServico } from './../business/protocols/http-post-servico';

export class HttpPostServicoSpy implements IHttpPostServico{
    url?:string
    async post(url: string): Promise<void> {
       this.url = url;

       return Promise.resolve();
    }

}