// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

// var person = ['Andrew', 25];
// var personTwo = ['Jen', 29];
//
// function greet (name, age) {
//   console.log('Hi ' + name + '! Your age is ' + age);
// }
//
// greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Kristof', ...names];
final.forEach(function(element) {
  console.log('Hi ' + element + '\n');
});
