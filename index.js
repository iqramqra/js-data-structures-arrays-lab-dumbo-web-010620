// Write your solution here!
//pop push shift unshift

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  return [...drivers,name]
}

function prependDriver(name){
  
}

function removeLastDriver(){
  
}

function removeFirstDriver(){
  
}





