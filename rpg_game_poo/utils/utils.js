"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = print;
exports.clear = clear;
exports.randomInt = randomInt;
exports.awaitInput = awaitInput;
exports.input = input;
exports.printOneLine = printOneLine;
exports.printSlow = printSlow;
exports.len = len;
var readline_sync_1 = require("readline-sync");
var cores_1 = require("../colors/cores");
function print() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
function clear() {
    console.clear();
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function awaitInput() {
    input("\n".concat(cores_1.cores.cianoBrilhanteNegrito, "Pressione ENTER para Continuar...").concat(cores_1.cores.reset, "\n"));
    clear();
}
function input(prompt) {
    return (0, readline_sync_1.question)(prompt);
}
function printOneLine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    process.stdout.write(args.join(' '));
}
function printSlow(text) {
    var delay = 15;
    var index = 0;
    function printChar() {
        if (index < len(text)) {
            printOneLine(text[index]);
            index++;
            setTimeout(printChar, delay);
        }
        else {
            print();
        }
    }
    printChar();
}
function len(arg) {
    return arg.length;
}
