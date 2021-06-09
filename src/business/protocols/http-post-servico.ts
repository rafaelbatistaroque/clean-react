import { HttpPostParams, HttpResponse } from '@/shared/types';

export interface IHttpPostServico {
    post(params:HttpPostParams):Promise<HttpResponse>
}