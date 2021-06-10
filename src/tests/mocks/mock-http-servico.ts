import { HttpPostParams, HttpResponse, EHttpStatusCode } from "@/shared";
import { IHttpPostServico } from "@/business/protocols";

export class MockHttpPostServicoSpy<T, U> implements IHttpPostServico<T, U> {
	url?: string;
	body?: T;
	response: HttpResponse<U> = {
		statusCode: EHttpStatusCode.ok,
	};

	async post(params: HttpPostParams<T>): Promise<HttpResponse<U>> {
		this.url = params.url;
		this.body = params.body;

		return this.response;
	}
}
