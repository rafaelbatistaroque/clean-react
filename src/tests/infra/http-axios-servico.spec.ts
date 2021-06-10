import { HttpAxiosServico } from "@/infra/http-axios-servico/http-axios-servico";
import { mockAxios, mockPostRequest } from "@/tests/mocks";
import axios from "axios";

jest.mock("axios");

type SUTTypes = {
	sut: HttpAxiosServico;
	mockedAxios: jest.Mocked<typeof axios>;
};

const criarSUT = (): SUTTypes => {
	const sut = new HttpAxiosServico();
	const mockedAxios = mockAxios();

	return {
		sut,
		mockedAxios,
	};
};

describe("infra", () => {
	test("ao invovar post | quando passado url por parâmetro | deve estar com url, verbo e body corretos", async () => {
		const request = mockPostRequest();
		const { sut, mockedAxios } = criarSUT();

		await sut.post(request);

		expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
	});

	test("ao invovar post | quando parâmetros corretos | deve retornar statusCode e body específicos", () => {
		const { sut, mockedAxios } = criarSUT();

		const resposta = sut.post(mockPostRequest());

		expect(resposta).toEqual(mockedAxios.post.mock.results[0].value);
	});
});
