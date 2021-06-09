import { HttpPostServicoSpy } from '../../mocks/http-servico';
import { AutenticacaoRemotaHandler } from '../../business/services/autenticacao/autenticacao-remota-handler';

describe('business.services.autenticacao', () => {
    test('ao invovar handler | quando invocar httpServico | deve estar com url correta', async () => {

        const url = "qualquer_url";
        const httpPostServicoSpy = new HttpPostServicoSpy();
        const sut = new AutenticacaoRemotaHandler(url, httpPostServicoSpy);
        await sut.autenticar();

        expect(httpPostServicoSpy.url).toBe(url);
    });
});