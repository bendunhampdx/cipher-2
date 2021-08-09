let sentence = prompt("Please enter a sentence.");
alert(sentence);

console.log("made it here");
function letters() {
  let letter1 = sentence.toUpperCase().charAt(0);
  let letter2 = sentence.toUpperCase().charAt(sentence.length -1);
  return alert(letter1 + letter2);


};
letters();