export default function validateEmail(email){
  
  let emailValid;

  if(email){
    
    emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if(emailValid) emailValid = true;
    else emailValid = false;

  }
  else emailValid = false;

  return emailValid;

}