const operators = ['kurt', 'josh', 'jack'];
const readline = require('readline-sync');

function addOperator() {
  const toBeAdded = readline.question("Enter new operator name:");
  return toBeAdded;
};

function removeOperator() {
  const toBeRemoved = readline.question("Who do you want to remove?");
  const index = operators.indexOf(toBeRemoved);
  if (index > -1 && operators.includes(toBeRemoved)) {
    operators.splice(index, 1);
  } else {
    console.log("No matches");
  }
};

class Meeting {
  constructor(host, cohost, mics) {
    this._host = host;
    this._cohost = cohost;
    this._mics = mics;
  };

  //Getter/Setter for checking input types
  get host() {
    if (this._host != undefined) {
      return this._host;
    } else {
      return 'No host assigned';
    }
  };

  set host(str) {
    if (typeof str == 'string') {
      this._host = str; 
    } else {
       return 'This value must be a string';
    }
  } 
};

//CLI for adding items to operators array
function userInput() {
  const readline = require('readline-sync');
  const input = readline.question("Type option (add/view/remove):"); 

  switch (input) {
    case "add":
      operators.push(addOperator());
      userInput();
    case "view":
      console.log(operators);
      userInput();
    case "remove":
      removeOperator();
      userInput();
    default:
      console.log("invaild input");
      userInput();
  }
};

function randomise() {
  
  function hasDuplicate(obj) {
    const arr = Object.values(obj);
    return arr.some((val, i) => arr.indexOf(val) !== i);
  }

  function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  }

  const newInstance = new Meeting(randomIndex(operators), randomIndex(operators), randomIndex(operators));

  return hasDuplicate(newInstance) ? randomise() : newInstance;
}

console.log(randomise());
