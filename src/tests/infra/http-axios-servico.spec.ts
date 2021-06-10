import { HttpAxiosServico } from "@/infra/http-axios-servico/http-axios-servico";
import axios from "axios";
import faker from "faker";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("infra", () => {
	test("ao invovar post | quando passado url por parâmetro | deve estar com url correta", async () => {
		const url = faker.internet.url();
		const sut = new HttpAxiosServico();

		await sut.post({ url });

		expect(mockedAxios).toHaveBeenCalledWith(url);
	});
});
