import { IHttpPostServico } from "@/business/protocols";
import { HttpPostParams, HttpResponse } from "@/shared/types";
import axios from "axios";

export class HttpAxiosServico implements IHttpPostServico<any, any> {
	async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
		const resposta = await axios.post(params.url, params.body);

		return {
			statusCode: resposta.status,
			body: resposta.data,
		};
	}
}
