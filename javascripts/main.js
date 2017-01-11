console.log("hello loops");

for (var i = 0; i < 100; i += 10) {
  console.log("what is i", i);
}
// every time it runs through the loop, we get a value of i

for (var i = 100; i > 1; i = i/2) {
  console.log("divide by 2", i);
}
// supposed to start at 100 & divide by 2

var halfVals = [];
for (var i = 100; i > 1; i = i/2) {
  halfVals.push(i);
}

console.log("halfVals", halfVals);

// function & method are used interchangeably, but they say
// method when the object has multiple functions

var evenOdds = [];
for (var i = 100; i >= 0; i-- ) {
  console.log("mod", i % 2);
  if (i  % 2 === 0) {
      evenOdds.unshift(i);
  } else {
      evenOdds.push(i)
  }
}
console.log("evenOdds", evenOdds);

// ****  MODULUS: if i is divisible by 2 WITHOUT a remainder,
// aka if I is an even number ****

// shift removes from beginning
// unshift adds to beginning
// pop removes from end
// push adds to end
// modulus % is asking if there is a remainder or not
