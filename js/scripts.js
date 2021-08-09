let sentence = prompt("Please enter a sentence.");
alert(sentence);


function letters() {
  let letter1 = sentence.toUpperCase().charAt(0);
  let letter2 = sentence.toUpperCase().charAt(sentence.length -1);
  let newSentence = letter1 + letter2;
  let newSentence2 = newSentence.split("").reverse().join("").toString();  
  let newSentence3 = sentence + newSentence2;
  let halfChar = newSentence3.charAt(newSentence3.length / 2).split("").toString("");
  let response = halfChar + newSentence3;
  let final = response.split("").reverse().join("").toString();
  alert(final)
};
letters();

// function reverse() {
//   console.log("made it here");
//   let rMessage = newSentence.split(" ").reverse();
//   return alert(rMessage);
// }
// reverse();
