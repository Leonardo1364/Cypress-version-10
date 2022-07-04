import * as authCommands from '../support/auth.commands.ts';
import {navigate} from "../support/po";

describe('Cypress version 10', () => {

  it('should authenticate successfully', () => {
    navigate();
    authCommands.auth('rgarcia', 'teste123');
    authCommands.selectCovenant();
  });
})
