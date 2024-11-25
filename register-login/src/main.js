"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Register_1 = require("../classes/Register");
function main() {
    var cpf = (0, readline_sync_1.question)("Digite Seu CPF: ");
    var email = (0, readline_sync_1.question)("Digite Seu EMAIL: ");
    var password = Number((0, readline_sync_1.question)("Digite Sua Senha Numérica: "));
    var register = new Register_1.Register(cpf, email, password);
}
main();
