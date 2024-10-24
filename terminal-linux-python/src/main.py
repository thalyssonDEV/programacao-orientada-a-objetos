import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'classes')))

from Assignments import Assignments
from Command import Command
from TerminalMessage import TerminalMessage

def main() -> None:
  os.system('clear')
  stdout = TerminalMessage() # Instância da classe TerminalMessage
  terminal = Command() # Intância da classe Command
  
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
        stdout.error(f"'{command[0]}' is not recognized as an internal or external command.")
          
main()