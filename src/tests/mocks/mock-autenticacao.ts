import { AutenticacaoParams } from "../../shared/types";
import { AccontModel } from "@/domain/models/AccontModel";
import faker from "faker";

export const mockBodyAutenticacao = (): AutenticacaoParams => {
	return {
		email: faker.internet.email(),
		senha: faker.internet.password(),
	};
};

export const mockBodyAccountModel = (): AccontModel => {
	return {
		token: faker.datatype.uuid(),
	};
};
