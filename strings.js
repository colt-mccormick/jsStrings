console.log("hello world!!!!"); 

//challenge 1

var numOfSandwiches= 4*2; 
console.log("numOfSandwiches", numOfSandwiches)//should print 8

//challenge 2

var name ="Colt"
var string = ("Hello, " + name + " how are you doing today?");
console.log("string", string); //should print out "Hello, Colt how are you doing today?"

//challenge 3

var DNA ="GCAT"

//var RNA = DNA[0] + DNA[1] + DNA[2] + "U"
//var RNA = DNA.slice(0,3) + "U"
var RNA = DNA.replace("T", "U")
console.log("RNA:", RNA)//should print out GCAU

//challenge #4 

//Goat should print out wide, "ALLIGATor should print out small"

//var animal = "goat"
//var animal = "ALLIGATor"
//var animal = "bird"
var animal = "Alligator"

if (animal.toLowerCase()==="alligator"){
  console.log("animal type: small")
} else{
    console.log("animal type: wide")
}
