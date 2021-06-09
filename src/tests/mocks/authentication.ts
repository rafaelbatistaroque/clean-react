import { AutenticacaoParams } from './../../shared/types';
import faker from 'faker';

export const mockAuthetication = (): AutenticacaoParams => {
    return {
        email: faker.internet.email(),
        senha: faker.internet.password()
    }
}