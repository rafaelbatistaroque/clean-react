import { HttpPostParams } from "@/shared";
import { HttpAxiosServico } from "@/infra/http-axios-servico/http-axios-servico";
import axios from "axios";
import faker, { fake } from "faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedAxiosResult = { data: faker.random.objectElement(), status: faker.datatype.number() };

mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const criarSUT = (): HttpAxiosServico => {
	return new HttpAxiosServico();
};

const mockPostRequest = (): HttpPostParams<any> => ({
	url: faker.internet.url(),
	body: faker.random.objectElement(),
});

describe("infra", () => {
	test("ao invovar post | quando passado url por parâmetro | deve estar com url, verbo e body corretos", async () => {
		const request = mockPostRequest();
		const sut = criarSUT();

		await sut.post(request);

		expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
	});

	test("ao invovar post | quando parâmetros corretos | deve retornar statusCode e body específicos", async () => {
		const sut = criarSUT();

		const resposta = await sut.post(mockPostRequest());

		expect(resposta).toEqual({ statusCode: mockedAxiosResult.status, body: mockedAxiosResult.data });
	});
});
