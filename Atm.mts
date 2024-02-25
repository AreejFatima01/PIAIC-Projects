import inquirer from "inquirer";
interface userInput {
  userID: string;
  userPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
}
const userInput: userInput = await inquirer.prompt([
  {
    type: "input",
    name: "userID",
    message: "Enter user ID",
  },
  {
    type: "number",
    name: "userPin",
    message: "Enter your Pin",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message: "Select your Account Type",
  },
  {
    type: "list",
    name: "transactionType",
    choices: "Select your transaction Type",
    message: "Select your transaction",
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your amount you want to withdraw",
    when(userInput): boolean {
      return userInput.transactionType === "Fast Cash";
    },
  },
]);
//making variables of user Input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredamount = userInput.amount;

if (userID && userPin && userInput.transactionType === "Balance Inquiry") {
  const userBalance = Math.floor(Math.random() * 100000);
  console.log(`Your current balance is Rs ${userBalance}\n`);
} else if (userID && userPin) {
  const userBalance2 = Math.floor(Math.random() * 100000);
  if (userBalance2 > enteredamount) {
    console.log(
      `Your account has been debited with Rs ${enteredamount} and yourremaing balanceis ${
        userBalance2 - enteredamount
      }`
    );
  } else {
    console.log(`\n Unsufficient Balance`);
  }
}
