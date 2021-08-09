let sentence = prompt("Please enter a sentence.");
alert(sentence);


function letters() {
  let letter1 = sentence.toUpperCase().charAt(0);
  let letter2 = sentence.toUpperCase().charAt(sentence.length -1);
  let combo = letter1 + letter2;
  alert(combo)
  function reverseLetters() {
 
    let reverseCombo = combo.split("").reverse().join("").toString();
    alert(reverseCombo);
    console.log("Hello Benjamin")
  }
  reverseLetters();
};
letters();

