// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const Name = "Sarah";
const Name = "Bram";

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 808; 
*/

if (age >= 18) {
   console.log("You are allowed");
} else {
   console.log("No, you are not allowed");
}

if (isFemale) {
   console.log("According to your ticket you're a woman");
} else {
   console.log(
      "Unfortunately, you are not allowed because you are a man"
   );
}

if (driverStatus === "bob") {
   console.log("You can drive");
} else {
   console.log("You are not allowed to drive");
}

if (age >= 18 && <= 25) {
   console.log("You get 50% off!")
}

if (name === "Sarah" || name === "Bram") {
   console.log("You're name is Sarah or Bram, you get a free beer")

}

if (totalamount >= 100) {
   console.log("free bottle of champagne");

} else if (totalAmount > 50) {
   console.log("free vega balls");
} else {
   console.log("No discount, thank you for coming")
}
