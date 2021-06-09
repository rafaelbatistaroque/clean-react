import { EHttpStatusCode } from './enums';

export type HttpPostParams = {
    url: string
    body?: object
}

export type AutenticacaoParams = {
    email:string
    senha:string
}

export type HttpResponse = {
    statusCode: EHttpStatusCode
    body?: any
}