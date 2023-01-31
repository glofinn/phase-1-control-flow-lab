function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return "This one is on me!";
  }
  if (value <= 2000) {
    return "That will be twenty bucks.";
  }
  if (value > 2000 && value < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  if (value > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet();

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
  // if (city !== "NYC") {
  //   return "No go.";
  // }
}
ternaryCheckCity();

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
  // if (tip === "generous") {
  //   return "Thank you so much.";
  // } else if (tip === "not as generous") {
  //   return "Thank you.";
  // } else return "Bye.";
}
