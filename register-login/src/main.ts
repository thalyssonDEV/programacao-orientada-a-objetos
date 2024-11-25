import { question } from 'readline-sync'
import { Register } from '../classes/Register'

function mainMenu() {
    console.log(`[ 1 ] - Registrar-se
    [ 2 ] - Fazer Login
    `)
}

function main() {
    while (true) {
        let op: string = question("Digite Sua Operação: ");

        switch (op) {
            case "1":
                return
        }
    }

    let name: string = question("Digite Seu NOME: ");
    let cpf: string = question("Digite Seu CPF: ");
    let email: string = question("Digite Seu EMAIL: ");
    let password: number = Number(question("Digite Sua SENHA NUMÉRICA: "));

    const register: Register = new Register(name, cpf, email, password);
}

main();