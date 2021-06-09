import { ErroCredenciaisInvalidas, ErroInesperado } from "@/shared/errors";
import { AutenticacaoParams } from "@/shared/types";
import { IHttpPostServico } from "@/business/protocols/http-post-servico";
import { EHttpStatusCode } from "@/shared/enums";
import { AccontModel } from "@/domain/models/AccontModel";

export class AutenticacaoRemotaHandler {
	constructor(private readonly url: string, private readonly httpServico: IHttpPostServico<AutenticacaoParams, AccontModel>) {}

	async handler(body: AutenticacaoParams): Promise<void> {
		const response = await this.httpServico.post({ url: this.url, body });

		switch (response.statusCode) {
			case EHttpStatusCode.ok:
				break;
			case EHttpStatusCode.unauthorized:
				throw new ErroCredenciaisInvalidas();
			case EHttpStatusCode.badRequest:
			default:
				throw new ErroInesperado();
		}
	}
}
