import { AutenticacaoParams } from '../../shared/types';
import faker from 'faker';

export const mockBodyAutenticacao = (): AutenticacaoParams => {
    return {
        email: faker.internet.email(),
        senha: faker.internet.password()
    }
}