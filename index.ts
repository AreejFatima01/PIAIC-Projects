class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    divide(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return x / y;
    }
}

// Function to parse input expression and perform calculation
function calculate(expression: string): number {
    const parts = expression.split(' ');
    const operand1 = parseFloat(parts[0]);
    const operator = parts[1];
    const operand2 = parseFloat(parts[2]);

    const calculator = new Calculator();

    switch (operator) {
        case '+':
            return calculator.add(operand1, operand2);
        case '-':
            return calculator.subtract(operand1, operand2);
        case '*':
            return calculator.multiply(operand1, operand2);
        case '/':
            return calculator.divide(operand1, operand2);
        default:
            throw new Error("Invalid operator.");
    }
}

// Simple command-line interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter expression (e.g., 2 + 3): ", (expression: string) => {
    try {
        const result = calculate(expression);
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
    readline.close();
});









import { syncBuiltinESMExports } from "module";
import{question} from readline-read
import { readSync } from "fs";
Sync

https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
https://github.com/panaverse/learn-typescript/tree/master/NODE_PROJECTS