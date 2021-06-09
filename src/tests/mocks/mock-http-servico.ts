import { HttpPostParams, HttpResponse } from "@/shared/types";
import { IHttpPostServico } from "@/business/protocols/http-post-servico";
import { EHttpStatusCode } from "@/shared/enums";

export class MockHttpPostServicoSpy implements IHttpPostServico {
	url?: string;
	body?: object;
	response: HttpResponse = {
		statusCode: EHttpStatusCode.noContent,
	};

	async post(params: HttpPostParams): Promise<HttpResponse> {
		this.url = params.url;
		this.body = params.body;

		return this.response;
	}
}
