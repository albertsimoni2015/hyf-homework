import "styles.scss";

// Or if installed from NPM to use with a bundler
import Artyom from "artyom.js";
// const artyom = require("artyom.js");
const artyom = new Artyom();
function getReply(command) {
  switch (command) {
    case "Hello my name is Benjamin":
      return "Nice to meet you Benjamin";
    case "What is my name?":
      return "Your name is Benjamin ";
    case "Add fishing to my todo":
      return "Fishing added to your todo";
    case "Add singing in the shower to my todo":
      return "Singing in the shower added to your todo";
    case "Remove fishing from my todo":
      return "Removed fishing from your todo";
    case "What is on my todo?":
      return "Fishing and singing in the shower";
    case "What day is it today?":
      return (
        new Date().getDate() +
        ". of " +
        new Date().toLocaleString("default", { month: "long" }) +
        " " +
        new Date().getFullYear()
      );
    case "What is 3+3":
      return 3 + 3;
    case "What is 6-3":
      return 6 - 3;
    case "What is 4*12":
      return 4 * 12;
    case "What is 9/3":
      return 9 / 3;
    case "Set a timer for 4 minutes":
      setTimeout(function() {
        //I dont know why 'undefined is getting displayed...i tried debug,as well...need your help with this...thanks!
        console.log("Timer done");
      }, 4000);
      break;
    default:
      return "Have a nice day!";
  }
}
function isgetReplyAvailable() {
  return typeof getReply !== "undefined" && typeof getReply === "function";
}

if (isgetReplyAvailable()) {
  let command;
  let timeoutId;
  let setIntervalTimer;

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.innerHTML = "Talk now 🙂";
    setIntervalTimer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 2;
      if (randomNumber % 2 === 0) {
        button.innerHTML = "Talk now 😮";
      } else {
        button.innerHTML = "Talk now 🙂";
      }
    }, 100);
    clearTimeout(timeoutId);

    command = "";
    timeoutId = setTimeout(() => {
      clearInterval(setIntervalTimer);
      const response = getReply(command);

      artyom.say(response);

      button.innerHTML = "Give a new command";
    }, 5000);
  });

  var UserDictation = artyom.newDictation({
    continuous: false, // Enable continuous if HTTPS connection
    onResult: function(text) {
      // Do something with the text
      if (text.length > command.length) {
        command = text;
        console.log(command);
      }
    },
    onStart: function() {
      console.log("Dictations started by the users");
    },
    onEnd: function() {
      console.log("Dictation stopped by the user");
    }
  });

  UserDictation.start();
} else {
  alert("add the getReply function!");
}