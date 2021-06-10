import { AutenticacaoParams, EHttpStatusCode, ErroCredenciaisInvalidas, ErroInesperado } from "@/shared";
import { IHttpPostServico } from "@/business/protocols";
import { AccountModel } from "@/domain/models";
import { IAutenticacao } from "@/domain/casos-de-uso";

export class AutenticacaoRemotaHandler implements IAutenticacao {
	constructor(private readonly url: string, private readonly httpServico: IHttpPostServico<AutenticacaoParams, AccountModel>) {}

	async handler(body: AutenticacaoParams): Promise<AccountModel> {
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
