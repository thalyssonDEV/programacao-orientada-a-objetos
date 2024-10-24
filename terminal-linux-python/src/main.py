import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'classes')))

from Assignments import Assignments
from Command import Command
from TerminalMessage import TerminalMessage
from SuggestionCommand import SuggestionCommand

def main() -> None:
  os.system('clear')
  stdout = TerminalMessage() # Instância da classe TerminalMessage
  terminal = Command() # Intância da classe Command
  suggest = SuggestionCommand() # Instância da classe SuggestCommand
  
  while True:
    attempt_command = input('> ')
    code_terminal_command = Assignments.check_command(attempt_command)
  
    match code_terminal_command:
      case 1:
        terminal.touch(attempt_command)
        
      case 2:
        terminal.clear()

      case 3:
        terminal.echo(attempt_command)

      case 4:
        terminal.rm(attempt_command)

      case 0:
        terminal.clear()
        terminal.exit()

      case _:
        command = attempt_command.strip().split()
        stdout.error(f"{command[0]}: command not found")
        suggest.suggest_command(command[0])


main()