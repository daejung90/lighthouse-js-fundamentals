// const temperature = -5;
// const raining = false;

// if (temperature < 0){
// console.log("Make sure you pick out a scarf!");
// }
// else if (temperature < 15){
// console.log ("Short sleeves won't cut it");
// }
// else {
// console.log("Short sleeves are fine");
// }

// console.log("Now you are ready to go"); 


// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
// console.log('You are eligible to vote');
// }

// if (temperature <40 || temperature > 40) {
// console.log ("Maybe going outside isn't such a good idea...")
// }

// if (!raining){
// console.log ("Leave your umbrella at home!")
// }

const whichSchool  = function (age) {

    if(age < 13) {
      console.log('You should go the Elementary School')
    }
    if (age >= 13 && age <= 18) {
      console.log('You should go to Secondary School')
    }
    if (age > 18) {
      console.log('You should go the Lighthouse Lab')
    }
  }
  
  console.log("I am 8. Which school should I go to?");
  whichSchool(25);
  