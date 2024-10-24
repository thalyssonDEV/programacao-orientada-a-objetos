class SuggestionCommand:
    def __init__(self) -> None:
        self.commands_dict = {
            'touch',
            'rm',
            'exit', 
            'clear',
            'echo'
        }

    def suggest_command(self, attempt_command: str) -> None:
        command = attempt_command.strip().split()[0]

        if len(command) < 2:
            Return None
        
        else:
            matching_commands = [cmd for cmd in self.commands_dict if cmd.startswith(command[:2])]

            
        

        


# Exemplo de uso
suggestion = SuggestionCommand()
input_command = "cl"  # Exemplo de entrada do usuário
suggestions = suggestion.suggest_command(input_command)

print("Sugestões:", suggestions)
