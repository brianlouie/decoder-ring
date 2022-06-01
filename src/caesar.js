// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let messageInput = input.toLowerCase();
   let key = "abcdefghijklmnopqrstuvwxyz"
   let keyArray = key.split("")
   if ( shift === 0 || shift < -25 || shift > 25) { return false }

   let result = ""

   encode ? shift = shift * 1 : shift = shift * -1

   for (let i = 0; i < messageInput.length; i++){
     if (!keyArray.includes(messageInput[i])) { result += messageInput[i] }
     for (let j = 0; j < keyArray.length; j++){
if ( messageInput[i] === keyArray[j] && (j + shift) >= 0 && (j + shift) <= 25 ) 
  { result += keyArray[j + shift] }
if ( messageInput[i] === keyArray[j] && (j + shift) > 25 ) {
  let endShift = ((j + shift) % 25) - 1
  result += keyArray[endShift]
}
if ( messageInput[i] === keyArray[j] && (j + shift) < 0 ) {
  let beginShift = (j + shift) + 26
  result += keyArray[beginShift]
}
     }
   }
   return result

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
