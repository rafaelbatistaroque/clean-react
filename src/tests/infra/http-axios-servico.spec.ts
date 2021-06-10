import { HttpPostParams } from "@/shared";
import { HttpAxiosServico } from "@/infra/http-axios-servico/http-axios-servico";
import axios from "axios";
import faker from "faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const criarSUT = (): HttpAxiosServico => {
	return new HttpAxiosServico();
};

const mockPostRequest = (): HttpPostParams<any> => ({
	url: faker.internet.url(),
	body: faker.random.objectElement(),
});

describe("infra", () => {
	test("ao invovar post | quando passado url por parâmetro | deve estar com url e verbo corretos", async () => {
		const request = mockPostRequest();
		const sut = criarSUT();

		await sut.post(request);

		expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
	});
});
