function shout(string) {
  
  return string.toUpperCase();
  
}

function whisper(string) {
  
  return string.toLowerCase();
  
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  switch (string){
    case string == logWhisper(string):
      console.log("I can't hear you!");
      break;
    case string == logShout(string):
      console.log("YES INDEED!");
      break;
    case string == "I love you, Grandma.":
      console.log("I love you, too.");
      break;
    default: return "Who are you?";
  }

  
}
  
  