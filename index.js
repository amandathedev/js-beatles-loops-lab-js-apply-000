// add solution here

function theBeatlesPlay(musicians, instruments) {
  let myArray = [];
  for(var i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  let myArray = [];
  let i = 0;
  while (i < facts.length) {
    myArray.push(facts[i] + "!!!");
    i++;
  }
  return myArray;
}

function iLoveTheBeatles(num) {
  let myArray = [];
  let i = 0;
  do {
    myArray.push("I love the Beatles!" + i);
    i++;
  }
  while (i < 15);
  return myArray;
}