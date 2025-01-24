# Tratamento de Erros - Explicação e Exemplos

## 1. Bloco Try-Catch (Try-Except)

O bloco `try-catch` (ou `try-except` em Python) é uma forma direta de capturar e tratar erros durante a execução de um programa. Ele é composto por blocos que identificam, tratam e podem realizar ações adicionais, como `else` e `finally`.

### Exemplo:
```python
try:
    # Tenta dividir por zero
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Erro capturado: {e}")
else:
    print("Execução bem-sucedida!")
finally:
    print("Este bloco sempre será executado.")
```

## 2. Validação Prévia (Defensive Programming)

Essa abordagem foca na prevenção de erros, verificando condições antes de executar o código. Isso reduz a chance de exceções ocorrerem.

### Exemplo:
```python
def divide_numbers(a, b):
    if b == 0:
        print("Erro: Divisão por zero não é permitida.")
        return None
    return a / b

result = divide_numbers(10, 0)
if result is not None:
    print(f"Resultado: {result}")
```
## 3. Log de Erros e Notificações

Esse método consiste em registrar erros em um arquivo de log ou enviar notificações para desenvolvedores, sem parar a execução do programa. É muito útil em sistemas em produção.

### Exemplo:
```python
import logging

logging.basicConfig(level=logging.ERROR, filename="errors.log", filemode="a", format="%(asctime)s - %(levelname)s - %(message)s")

def process_data(data):
    try:
        result = int(data) / 2
        return result
    except ValueError as e:
        logging.error(f"Erro de valor ao processar '{data}': {e}")
    except Exception as e:
        logging.error(f"Erro inesperado: {e}")

process_data("texto")  # Isso gerará um erro que será registrado no log
```