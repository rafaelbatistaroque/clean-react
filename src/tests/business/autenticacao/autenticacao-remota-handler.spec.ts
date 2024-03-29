import { AutenticacaoParams, EHttpStatusCode, ErroCredenciaisInvalidas, ErroInesperado } from "@/shared";
import { mockBodyAccountModel, mockBodyAutenticacao, MockHttpPostServicoSpy } from "@/tests/mocks";
import { AutenticacaoRemotaHandler } from "@/business/services/autenticacao";
import { AccountModel } from "@/domain/models";
import faker from "faker";

type SUTTypes = {
	sut: AutenticacaoRemotaHandler;
	httpPostServicoSpy: MockHttpPostServicoSpy<AutenticacaoParams, AccountModel>;
};

const criarSUT = (url = faker.internet.url()): SUTTypes => {
	const httpPostServicoSpy = new MockHttpPostServicoSpy<AutenticacaoParams, AccountModel>();
	const sut = new AutenticacaoRemotaHandler(url, httpPostServicoSpy);

	return {
		sut,
		httpPostServicoSpy,
	};
};

describe("business.services.autenticacao", () => {
	test("ao invovar handler | quando invocar httpServico | deve estar com url correta", async () => {
		const url = faker.internet.url();
		const { sut, httpPostServicoSpy } = criarSUT(url);

		await sut.handler(mockBodyAutenticacao());

		expect(httpPostServicoSpy.url).toBe(url);
	});

	test("ao invovar handler | quando invocar httpServico | deve estar com body correto", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		const autenticacoParams = mockBodyAutenticacao();

		await sut.handler(autenticacoParams);

		expect(httpPostServicoSpy.body).toEqual(autenticacoParams);
	});

	test("ao invovar handler | quando retorno httpPostServico é 401 | deve lançar ErroCredenciaisInvalidas", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		httpPostServicoSpy.response.statusCode = EHttpStatusCode.unauthorized;

		const promise = sut.handler(mockBodyAutenticacao());

		await expect(promise).rejects.toThrow(new ErroCredenciaisInvalidas());
	});

	test("ao invovar handler | quando retorno httpPostServico é 400 | deve lançar ErroInesperado", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		httpPostServicoSpy.response.statusCode = EHttpStatusCode.badRequest;

		const promise = sut.handler(mockBodyAutenticacao());

		await expect(promise).rejects.toThrow(new ErroInesperado());
	});

	test("ao invovar handler | quando retorno httpPostServico é 500 | deve lançar ErroInesperado", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		httpPostServicoSpy.response.statusCode = EHttpStatusCode.serverError;

		const promise = sut.handler(mockBodyAutenticacao());

		await expect(promise).rejects.toThrow(new ErroInesperado());
	});

	test("ao invovar handler | quando retorno httpPostServico é 404 | deve lançar ErroInesperado", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		httpPostServicoSpy.response.statusCode = EHttpStatusCode.badRequest;

		const promise = sut.handler(mockBodyAutenticacao());

		await expect(promise).rejects.toThrow(new ErroInesperado());
	});

	test("ao invovar handler | quando retorno httpPostServico é 200 | deve retornar AccountModel", async () => {
		const { sut, httpPostServicoSpy } = criarSUT();
		const httpResposta = mockBodyAccountModel();
		httpPostServicoSpy.response = {
			statusCode: EHttpStatusCode.ok,
			body: httpResposta,
		};

		const resposta = await sut.handler(mockBodyAutenticacao());

		expect(resposta).toEqual(httpResposta);
	});
});
