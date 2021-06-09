import { HttpPostParams, HttpResponse } from "@/shared/types";

export interface IHttpPostServico<T, U> {
	post(params: HttpPostParams<T>): Promise<HttpResponse<U>>;
}
