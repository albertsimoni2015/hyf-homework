// FLIGHT BOOKING

function getFullname(firstName, surName, useFormalName) {
    const fullName = `${firstName} ${surName}`;
    if (firstName === "" || surName === "") {
      alert("Please provide first and last names!");
      return ""; 
    } else {
      return useFormalName ? `Lord ${fullName}` : fullName;
    }
  }
  
  let fullname1 = getFullname("Richard", "Sanchez", false);
  let fullname2 = getFullname("Sponge", "Bob", true);
  console.log(fullname1);
  console.log(fullname2);
  
  // EVENT APPLICATION
  
  const today = new Date();
  const todayNumber = today.getDay();
  
  function getEventWeekday(daysFromToday) {
    const eventDays = (todayNumber + daysFromToday) % 7;
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    return week[eventDays];
  }
  
  const eventDate = getEventWeekday(13);
  console.log(eventDate);
  
  // WEATHER WEAR
  
  function whatToWear(temperature) {
    let youShouldWear;
    if (temperature <= 5) {
      youShouldWear = "Long-sleeved fur jumpsuit";
    } else if (temperature > 5 && temperature <= 13) {
      youShouldWear = "Long-sleeved wool jumpsuit";
    } else if (temperature > 13 && temperature <= 22) {
      youShouldWear = "Long-sleeved cotton jumpsuit and a jacket";
    } else if (temperature > 22 && temperature <= 30) {
      youShouldWear = "short-sleeved cotton jumpsuit";
    } else if (temperature > 30 && temperature <= 35) {
      youShouldWear = "Shorts and a tank-top";
    } else {
      youShouldWear = "Stay in a cool pool!";
    }
    return youShouldWear;
  }
  
  const clothesToWear = whatToWear(36);
  console.log(clothesToWear);
  
  // STUDENT MANAGER
 
  
  let class07Students = [];
  
  function addStudentToClass(studentName) {
    if (class07Students.length < 6) {
      if (class07Students.includes(studentName)) {
        alert(`Student ${studentName} is already in the class`); // return changed to alert after testing in CodePen
      } else if (studentName === "") {
        alert("Please provide the student's name");
      } else {
        class07Students.push(studentName);
      }
    } else {
      if (studentName === "queen") {
        if (class07Students.includes("queen")) {
          alert("The Queen is already in the class");
        } else {
          class07Students.push(studentName);
        }
      } else {
        alert("Cannot add more students to class 07");
      }
    }
  }
  
  function getNumberOfStudents() {
    return class07Students.length;
  }
  //Candy helper

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    if (candyType === 'Sweet') {
        var pricePerGram = 0.5;
    } else if (candyType === 'Chocolate') {
        pricePerGram = 0.7;
    } else if (candyType === 'Toffee') {
        pricePerGram = 1.1;
    } else if (candyType === 'Chewing-gum') {
        pricePerGram = 0.03;
    }
    var fee = pricePerGram * weight;
    boughtCandyPrices.push(fee);
}

addCandy('Sweet', 10);
addCandy('Sweet', 20);
addCandy('Toffee', 30);

var total = 0;
for (i = 0; i < boughtCandyPrices.length; i++) {
    total = boughtCandyPrices[i] + total;
}
console.log('total= ' + total);

var amountToSpend = Math.random() * 100;
console.log(`You have ${amountToSpend} to buy candy in total`)

function canBuyMoreCandy() {
    if (total < amountToSpend) {
        console.log('You can buy more, so Please do!')
    } else {
        console.log('Enough candy for you')
    }
}
canBuyMoreCandy(); 