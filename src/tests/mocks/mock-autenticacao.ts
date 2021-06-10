import { AccountModel } from "@/domain/models";
import { AutenticacaoParams } from "@/shared";
import faker from "faker";

export const mockBodyAutenticacao = (): AutenticacaoParams => {
	return {
		email: faker.internet.email(),
		senha: faker.internet.password(),
	};
};

export const mockBodyAccountModel = (): AccountModel => {
	return {
		token: faker.datatype.uuid(),
	};
};
