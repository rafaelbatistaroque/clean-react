import { AutenticacaoRemotaHandler } from '../../business/services/autenticacao/autenticacao-remota-handler';
import {IHttpPostServico} from '../../business/protocols/http-post-servico';


describe('business.services.autenticacao', () => {
    test('ao invovar handler | quando invocar httpServico | deve estar com url correta', async () => {
        class HttpPostServicoSpy implements IHttpPostServico{
            url?:string
            async post(url: string): Promise<void> {
               this.url = url;

               return Promise.resolve();
            }

        }

        const url = "qualquer_url";
        const httpPostServicoSpy = new HttpPostServicoSpy();
        const sut = new AutenticacaoRemotaHandler(url, httpPostServicoSpy);
        await sut.autenticar();

        expect(httpPostServicoSpy.url).toBe(url);
    });
});