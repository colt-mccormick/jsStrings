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

//in class example adding HTML via Javascript
var yarn = "the better string"; 
var domString = "<h4>" + yarn + "</h4>"; 

var myDiv = document.getElementById('yarn-holder');

myDiv.innerHTML = domString; 

//challenge #5a

var str="IBMWLOVEbmcatsbmw"
var str = str.replace(/[BMWbmw]/g,"")//removes BMW
//console.log("str:", str)//display ILOVEcats
var catStr = "<h1>" + str + "<h1>"; 
var catElement = document.getElementById('cat-holder');
catElement.innerHTML = catStr; 

