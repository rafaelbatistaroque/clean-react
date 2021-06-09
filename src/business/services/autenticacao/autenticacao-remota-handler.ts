import { ErroCredenciaisInvalidas } from "@/shared/errors";
import { AutenticacaoParams } from "@/shared/types";
import { IHttpPostServico } from "@/business/protocols/http-post-servico";
import { EHttpStatusCode } from "@/shared/enums";

export class AutenticacaoRemotaHandler {
	constructor(
		private readonly url: string,
		private readonly httpServico: IHttpPostServico
	) {}

	async handler(body: AutenticacaoParams): Promise<void> {
		const response = await this.httpServico.post({ url: this.url, body });

		switch (response.statusCode) {
			case EHttpStatusCode.unauthorized:
				throw new ErroCredenciaisInvalidas();
			default:
				return Promise.resolve();
		}
	}
}
