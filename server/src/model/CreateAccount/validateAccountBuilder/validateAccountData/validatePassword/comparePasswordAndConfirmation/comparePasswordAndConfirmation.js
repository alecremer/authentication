const comparePasswordAndConfirmation = function(password, passwordConfirmation) {
    
    if(password && passwordConfirmation){

        return (password === passwordConfirmation);
    
    }
    else return false;
    
}

module.exports = comparePasswordAndConfirmation;