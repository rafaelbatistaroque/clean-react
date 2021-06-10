import { AutenticacaoParams } from "@/shared";
import { AccountModel } from "@/domain/models";

export interface IAutenticacao {
	handler(params: AutenticacaoParams): Promise<AccountModel>;
}
