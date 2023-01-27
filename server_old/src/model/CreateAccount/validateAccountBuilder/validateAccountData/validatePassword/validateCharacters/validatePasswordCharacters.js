export default function validatePasswordCharacters(password) {

    // dont have space and ; " ' characters 
    // must have at last 8 chars and at max 32 chars 
        
    if(password){
        
        return /^((?!.*?[ ])(?!.*?[;"'])).{8,32}$/.test(password);

    }
    else return false;

}