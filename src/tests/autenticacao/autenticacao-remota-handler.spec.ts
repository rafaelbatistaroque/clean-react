import { HttpPostServicoSpy } from '../mocks/http-servico';
import { AutenticacaoRemotaHandler } from '../../business/services/autenticacao/autenticacao-remota-handler';
import faker from "faker";

type SUTTypes = {
    sut: AutenticacaoRemotaHandler,
    httpPostServicoSpy: HttpPostServicoSpy
}

const criarSUT = (url = faker.internet.url()): SUTTypes => {
    const httpPostServicoSpy = new HttpPostServicoSpy();
    const sut = new AutenticacaoRemotaHandler(url, httpPostServicoSpy);

    return {
        sut,
        httpPostServicoSpy
    }
}

describe('business.services.autenticacao', () => {
    test('ao invovar handler | quando invocar httpServico | deve estar com url correta', async () => {
        const url = faker.internet.url();
        const {sut, httpPostServicoSpy}= criarSUT(url);

        await sut.autenticar();

        expect(httpPostServicoSpy.url).toBe(url);
    });
});