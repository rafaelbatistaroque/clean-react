import { HttpAxiosServico } from "@/infra/http-axios-servico/http-axios-servico";
import axios from "axios";
import faker from "faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const criarSUT = (): HttpAxiosServico => {
	return new HttpAxiosServico();
};

describe("infra", () => {
	test("ao invovar post | quando passado url por parâmetro | deve estar com url e verbo corretos", async () => {
		const url = faker.internet.url();
		const sut = criarSUT();

		await sut.post({ url });

		expect(mockedAxios.post).toHaveBeenCalledWith(url);
	});
});
