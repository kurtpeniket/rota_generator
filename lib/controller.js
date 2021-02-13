const controller = () => {
  const operators = ['kurt', 'josh', 'jack'];
  // const readline = require('readline-sync');
  
  const addOperator = (operator) => {
    // const toBeAdded = readline.question("Enter new operator name:");
    return toBeAdded;
  };
  
  const removeOperator = (operator) => {
    // const toBeRemoved = readline.question("Who do you want to remove?");
    const index = operators.indexOf(toBeRemoved);
    if (index > -1 && operators.includes(toBeRemoved)) {
      operators.splice(index, 1);
    } else {
      console.log("No matches");
    }
  };
};

export { controller };