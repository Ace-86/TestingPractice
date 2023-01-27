const caesar = function(word, num) {
    let solved = ""
    num = (num%26 + 26) % 26;
    for (let i = 0; i < word.length ; i++) {
      let charCodes = word[i].charCodeAt();
      if ((charCodes >= 65 && charCodes <= 90)) {
        solved += String.fromCharCode((charCodes - 'A'.charCodeAt(0) + num)%26 
          + 'A'.charCodeAt(0)) ;
      } else if(charCodes >= 97 && charCodes <= 122){
          solved += String.fromCharCode((charCodes-'a'.charCodeAt(0) + num) % 26 
         + 'a'.charCodeAt(0));
      } else {
          solved += word[i]
      }
   }
   return solved;
  }
//   console.log(caesar("abcdefghijklmnopqrstuvwxyzABCDEFGHI", 1));
module.exports = { caesar }