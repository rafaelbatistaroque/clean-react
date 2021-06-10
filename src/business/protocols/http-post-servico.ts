import { HttpPostParams, HttpResponse } from "@/shared";

export interface IHttpPostServico<T, U> {
	post(params: HttpPostParams<T>): Promise<HttpResponse<U>>;
}
