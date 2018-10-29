// JavaScript source code
console.log("hello world");

const chalk = require('chalk');
const chalkers = require('chalk-animation');

console.log(chalk.blue('Hello World'));

var glitch = chalkers.glitch('This is colorful text', 2);
setTimeout(() => {
    glitch.stop();
}, 500);
setTimeout(() => {
    glitch.start();
}, 1000);