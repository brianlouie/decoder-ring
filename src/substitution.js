// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   if ( !alphabet || alphabet.length !== 26) { return false }
   let messageInput = input.toLowerCase();
   let key = "abcdefghijklmnopqrstuvwxyz"
   let keyArray = key.split("")
   let codeArray = alphabet.split("")
   
    let duplicateCheck = ""
    for (let i = 0; i < alphabet.length; i++){
      if ( duplicateCheck.includes(alphabet[i]) ) { return false }
      duplicateCheck += alphabet[i]
    }
    
   let cipherKey = {}
   for (let i = 0; i < key.length; i++){
      cipherKey[keyArray[i]] = codeArray[i]
    }
    
   let decodeKey = {}
   for (let i = 0; i < key.length; i++){
     decodeKey[codeArray[i]] = keyArray[i]
   }

   let result = ""
   
   if (encode === true){
   for (let i = 0; i < messageInput.length; i++){
     if (messageInput[i] === " ") { result += messageInput[i] }
     else {result += cipherKey[messageInput[i]]}
   }
    }
    
   if (encode === false){
     for (let i = 0; i < messageInput.length; i++){
       if (messageInput[i] === " ") { result += messageInput[i] }
       else {result += decodeKey[messageInput[i]]}
     }
   }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
