const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
     return kittens.push(name);
}
destructivelyAppendKitten('Ralph');

Arrays destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}