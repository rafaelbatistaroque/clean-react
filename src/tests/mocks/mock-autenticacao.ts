import { AccontModel } from "@/domain/models/AccontModel";
import { AutenticacaoParams } from "@/shared/types";
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
