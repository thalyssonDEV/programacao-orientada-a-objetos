export class Register {
    private name: string = "";
    private cpf: string = "";
    private email: string = "";
    private password: number = 0;

    constructor(name: string, cpf: string, email: string, password: number) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
    }
};
