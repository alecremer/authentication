import validateAccountDataBuilder from './validateAccountBuilder/validateAccountDataBuilder';
import registerAccount from './registerAccount';

function createAccount(accountData) {
    
    // validate account data --------------------------------------------------
    
    var createAccountResponse;

    createAccountResponse = validateAccountBuilder(accountData);
    var accountDataValid = createAccountResponse.accountDataValid;
    
    

    // register account -------------------------------------------------------

    var accountRegistered;

    if(accountDataValid){
        accountRegistered = registerAccount(accountData);
    }
    else accountRegistered = false;

    createAccountResponse.accountRegistered = accountRegistered;
    
    return createAccountResponse;

}

module.exports = createAccount;