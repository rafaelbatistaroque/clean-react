import {IHttpPostServico} from "business/protocols/http-post-servico";

export class AutenticacaoRemotaHandler{
    constructor(private readonly url:string,private readonly httpServico:IHttpPostServico){}

    async autenticar():Promise<void>{
        await this.httpServico.post({url: this.url});
    }
}