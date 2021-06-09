import { mockBodyAutenticacao, MockHttpPostServicoSpy } from '@/tests/mocks';
import { AutenticacaoRemotaHandler } from '@/business/services/autenticacao/autenticacao-remota-handler';
import faker from "faker";

type SUTTypes = {
    sut: AutenticacaoRemotaHandler,
    httpPostServicoSpy: MockHttpPostServicoSpy
}

const criarSUT = (url = faker.internet.url()): SUTTypes => {
    const httpPostServicoSpy = new MockHttpPostServicoSpy();
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

        await sut.autenticar(mockBodyAutenticacao());

        expect(httpPostServicoSpy.url).toBe(url);
    });

    test('ao invovar handler | quando invocar httpServico | deve estar com body correto', async () => {
        const {sut, httpPostServicoSpy}= criarSUT();
        const autenticacoParams = mockBodyAutenticacao();
        await sut.autenticar(autenticacoParams);

        expect(httpPostServicoSpy.body).toEqual(autenticacoParams);
    });
});