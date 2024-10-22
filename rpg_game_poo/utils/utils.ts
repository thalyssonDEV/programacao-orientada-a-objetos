import { question } from 'readline-sync';
import { cores } from '../colors/cores';

export function print(...args: any[]): void {
    console.log(...args);
}

export function clear(): void {
    console.clear();
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function awaitInput(): void {
    input(`\n${cores.cianoBrilhanteNegrito}Pressione ENTER para Continuar...${cores.reset}\n`);
    clear();
}

export function input(prompt: string): string {
    return question(prompt);
}

export function printOneLine(...args: any[]): void {
    process.stdout.write(args.join(' '));
}

export function printSlow(text: any) {
    const delay = 15;
    let index = 0;

    function printChar() {
        if (index < len(text)) {
            printOneLine(text[index]);
            index++;
            setTimeout(printChar, delay);
        } else {
            print();
        }
    }
    printChar();
}

export function len(arg: string | any[]): number {
    return arg.length;
}