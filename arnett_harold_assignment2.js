// alert("JavaScript works!");

// Harold Arnett
// Project 2
// SDI 1302
// HOME REMODEL

// My Variables

var houseProject = "remodel";
var project = "kitchen cabinets";
var material = "wood used";
var Months = 2;
var Sheets = 9;
var typeOfDoors = "flat panel doors";
var hardwareFinish = ("rubbed bronze");
var Handles = 25;
var Hinges = 50;

// My Procedure

var division = function(x,y) {
    var outcome = project/9;
    
    console.log("I have enough materials to complete this project!");
};

var material = true;

 if ( material === false) { 
    console.log("I will have to go back and buy more wood!");
    } else {
    console.log("I will have enough wood for the project!");
};


//Boolean   
var p = project, q = "wood", r = 9;

// Given: (p ∧ q) ∨ r
    if ((p && q) || r) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
};   
var buyWood = function(givenCash) {
	var pricePerBoard = 25,
		sheets;
	if (givenCash < pricePerBoard) {
	console.log("That's not enough to buy anything!");
	  return sheets = 9;    
  
  } 
     
  sheets = Math.floor(225 / 25);
  return sheets;
}; 
    
var gotSheets = buyWood(1);
 	console.log("Thanks for buying " + gotSheets + " Sheets of wood!");

 // Array
var wood1 = "oak",
	wood2 = "birch",
	wood3 = "maple";
	  
var woods =[
"Oak",
"Birch",
"Maple"
];
 console.log( woods.length + " types of woods to choose from!");


var adjectives =[
 	 o = " is a hard wood!",
     b = " is a hard wood!",
     m = " is a soft wood!"
]; 
	console.log(woods[0] + o );
	console.log(woods[1] + b );
	console.log(woods[2] + m );

 for(var i=0, j=woods.length; i < j; i++) {
	console.log(woods[i]);
};  
  
 if ( woods[0] + o === false) { 
    console.log("I will have the right wood for the job!");
    } else {
    console.log("I will have to choose a better wood to use!");

 var buyLumber = function(givenCash) {
	var pricePerBoard =25,
		sheetsOfOak;
	if (givenCash < pricePerBoard) {
	console.log("That's not enough to buy anything!");
	sheetsOfOak = 9;    
  
  } 
     
  sheetsOfOak = Math.floor(225 / 25);
  return sheetsOfOak;
}; 
    
var gotLumber = buyLumber(9) ;
 	console.log("I have just enough money to buy " + gotLumber  +  " sheets of hard oak!");   

// Number

var doors = 25
var handles = 25
var hinges = 50

console.log(handles + hinges);

// While Loop
var oak = 9
	while(oak>0){
	console.log(oak + "sheets of material used!");
	oak--;
	
};
console.log("I have no materials left!");
 
};
var buyhardware = function(givenCash) {
	var pricePerPiece = 2,
		pieces;
	if (givenCash < pricePerPiece) {
	console.log("That's not enough to buy anything!");
	pieces = 0;    
  
  } 
     
  piece = Math.floor(160 / 2);
  return piece;
}; 
    
var gotHardware = buyhardware(1);
 	console.log("Thanks for buying " + gotHardware + " pieces of hardware to complete the project!");    

// String
var a = true,
	b = false,
	c = "is ",
	d = "now done!";

var hrp = "My kitchen remodel ";{
	var jobDone = hrp +  c  +  d;
	console.log(hrp  +  c   + d);
 };   

 var Duration = function(timeAllowance) {
	var hoursPerDay = 8,
		days;
	if (timeAllowance < hoursPerDay) {
	console.log("That's not long enough to get it all done!");
		days = 0;    
  
  } 
     
  days = Math.floor(60 / 8);
  return days;
}; 
    
var duration = " a couple of months ";
 	console.log("I thought" + duration + "was more than enough time to complete the remodel!");   

// Return Values
var buyMilk = function(givenCash) {
	var pricePerGallon = 3,
		wholeGallons;
	if (givenCash < pricePerGallon) {
	console.log("That's not enough to buy anything!");
	wholeGallons = 0;    
  
  } 
     
  wholeGallons = Math.floor(givenCash / pricePerGallon);
  return wholeGallons;
}; 
    
var gotGallons = buyMilk(1);
 	console.log("Thanks for buying " + gotGallons + " gallons of milk!");
 	
    
    
    
    
    