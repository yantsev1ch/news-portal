import { USER_LOCALSTORAGE_KEY } from '../../src/shared/const/localstorage';
import { login } from './commands/login';

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>;
    }
  }
}

export {};
