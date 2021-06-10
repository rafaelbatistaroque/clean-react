import { AutenticacaoParams, EHttpStatusCode, ErroCredenciaisInvalidas, ErroInesperado } from "@/shared";
import { IHttpPostServico } from "@/business/protocols/http-post-servico";
import { AccontModel } from "@/domain/models/AccontModel";
import { IAutenticacao } from "@/domain/casos-de-uso/autenticacao";

export class AutenticacaoRemotaHandler implements IAutenticacao {
	constructor(private readonly url: string, private readonly httpServico: IHttpPostServico<AutenticacaoParams, AccontModel>) {}

	async handler(body: AutenticacaoParams): Promise<AccontModel> {
		const response = await this.httpServico.post({ url: this.url, body });

		switch (response.statusCode) {
			case EHttpStatusCode.ok:
				return response.body;
			case EHttpStatusCode.unauthorized:
				throw new ErroCredenciaisInvalidas();
			case EHttpStatusCode.badRequest:
			default:
				throw new ErroInesperado();
		}
	}
}
