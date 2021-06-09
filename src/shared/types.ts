import { EHttpStatusCode } from "./enums";

export type HttpPostParams<T> = {
	url: string;
	body?: T;
};

export type AutenticacaoParams = {
	email: string;
	senha: string;
};

export type HttpResponse<T> = {
	statusCode: EHttpStatusCode;
	body?: T;
};
