import chalk from "chalk";
import inquirer from "inquirer";
// Classe Player & Opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//Players Name & Opponents select
let Players = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:",
});
console.log(Player.name);
let Opponents = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
console.log(Opponents.select);
// Gather Data
let p1 = new Player(Player.name);
let o1 = new Opponent(Opponent.select);
if (Opponents.select == "Skeleton") {
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your opponent",
        choices: ["Attack", "Drink portion", "Run for your life.."],
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${p1.fuel}`));
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name}fuel is ${p1.name}`));
        }
    }
    if (ask.opt == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`Your drink health portion your fuels is ${p1.fuel}`));
    }
    if (ask.opt == "Run for your life") {
        console.log(chalk.red.bold.italic("You loose,Better Luck for Next Time"));
    }
}
