// Parte 1: Classe Calculadora
class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public somar(): number {
        return this.operando1 + this.operando2;
    }

    public subtrair(): number {
        return this.operando1 - this.operando2;
    }
}

// Parte 2: Classe Hora
class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public lerHora(): number {
        return this.hora;
    }

    public lerMinuto(): number {
        return this.minutos;
    }

    public lerSegundo(): number {
        return this.segundos;
    }

    public formatarHora(): string {
        const hh = this.hora.toString().padStart(2, '0');
        const mm = this.minutos.toString().padStart(2, '0');
        const ss = this.segundos.toString().padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
    }
}
