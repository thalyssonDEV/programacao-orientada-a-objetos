#include <string>

class Banco {
    private:
        // Atributos
        std::string nomeTitular;
        double limiteCredito;
        double saldoDebito;

    public:
        // Construtor;
        Banco(std::string nomeTitular, double limiteCredito, double saldoDebito) {
            this->nomeTitular = nomeTitular;
            this->limiteCredito = limiteCredito;
            this->saldoDebito = saldoDebito;
        }

        // Métodos
        void Depositar(double valorDeposito) {
            this->saldoDebito += valorDeposito;
        }

        void SacarSaldoDebito(double valorSaque) {
            // Continuar Dps
            exit(1);
        }

        // Getters e Setters
        std::string getNomeTitular() {
            return this->nomeTitular;
        }

        double getLimiteCredito() {
            return this->limiteCredito;
        }

        double getSaldoCredito() {
            return this->saldoDebito;
        }
};