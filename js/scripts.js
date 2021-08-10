let sentence = prompt("Please enter a sentence.");
alert(sentence);

function letters() {
  let letter1 = sentence.toUpperCase().charAt(0);
  let letter2 = sentence.toUpperCase().charAt(sentence.length - 1);
  let combo = letter1 + letter2;
  alert(combo)
  function reverseLetters() {
    let reverseCombo = combo.split("").reverse().join("").toString();
    alert(reverseCombo)
    function add() {
      let message = sentence + reverseCombo;
      alert(message)
      function count() {
        let newChar = sentence.charAt(sentence.length / 2)
        let message2 = newChar + message
        alert(message2)
        function reverse() {
          let newMessage = message2.split("").reverse().join("").toString();
          alert(newMessage)
        }
        reverse();
      }
      count();
    }
    add();
  }
  reverseLetters();
};
letters();


$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a heading.");
  });

  $("h2").click(function() {
    alert(reverse());
  });

  $("img").click(function() {
    alert(sentence);
  });
});




