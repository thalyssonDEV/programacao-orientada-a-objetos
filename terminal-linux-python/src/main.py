import os
from classes.Assignments import Assignments
from classes.Command import Command

def main():
  os.system('clear')

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

      case 0:
        terminal.exit()
          
main()