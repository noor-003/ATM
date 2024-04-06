#!/usr/bin/env node

import inquirer from 'inquirer';

class ATM {
private balance: number;

constructor(balance: number) {
this.balance = balance;
}

private menu() {
console.log('Welcome to ATM Machine');
console.log('1. Check Balance');
console.log('2. Withdraw');
console.log('3. Deposit');
console.log('4. Exit');
}

public run() {
this.menu();

inquirer.prompt([
{
type: 'input',
name: 'choice',
message: 'Enter your choice: '
}
]).then((answer) => {
const choice = answer.choice;

switch (choice) {
case '1':
this.checkBalance();
break;
case '2':
this.withdraw();
break;
case '3':
this.deposit();
break;
case '4':
console.log('Thank you for using our ATM Machine!');
break;
default:
console.log('Invalid choice, please try again');
this.run();
break;
}
});
}

private checkBalance() {
console.log(`Your current balance is: ${this.balance}`);
this.run();
}

private withdraw() {
inquirer.prompt([
{
type: 'input',
name: 'amount',
message: 'Enter the amount to withdraw: '
}
]).then((answer) => {
const amount = parseInt(answer.amount); // Convert the input to a number

if (amount > this.balance) {
console.log('Insufficient balance');
return;
}

this.balance -= amount;
console.log(`You have withdrawn: ${amount}`);
console.log(`Your new balance is: ${this.balance}`);
this.run();
});
}

private deposit() {
inquirer.prompt([
{
type: 'input',
name: 'amount',
message: 'Enter the amount to deposit: '
}
]).then((answer) => {
const amount = parseInt(answer.amount); // Convert the input to a number

this.balance += amount;
console.log(`You have deposited: ${amount}`);
console.log(`Your new balance is: ${this.balance}`);
this.run();
});
}
}

const atm = new ATM(1000);
atm.run();