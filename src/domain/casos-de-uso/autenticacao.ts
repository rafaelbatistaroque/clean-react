import { AutenticacaoParams } from "@/shared";
import { AccontModel } from "@/domain/models/AccontModel";

export interface IAutenticacao {
	handler(params: AutenticacaoParams): Promise<AccontModel>;
}
