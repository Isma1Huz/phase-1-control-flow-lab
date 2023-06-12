function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance <= 400){
    return "This one is on me!";
  }
  else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go.";

  }

}

function switchOnCharmFromTip(tip){
  // Write your code here!()
  if(tip === 'generous'){
    return "Thank you so much.";
  }
  else if(tip === "not as generous"){
    return "Thank you."
  }
  else {
    return "Bye."
  }

}
// 1) should return "Thank you so much." if the tip is generous
// 2) should return "Thank you." if the tip is not as generous
// 3) should return "Bye." if anything else
