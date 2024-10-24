import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'utils')))

from TerminalMessage import TerminalMessage
stdout = TerminalMessage()

class Command:
  def __init__(self) -> None:
    pass

  def touch(self, attempt_command: str) -> None:
    command = attempt_command.strip().split()

    path = '../files/'
    file_name = command[1]
    full_path = os.path.join(path, file_name)

    os.makedirs(path, exist_ok=True)

    with open(full_path, "x"):
      pass

  def echo(self, attempt_command: str) -> None:
    command = attempt_command.strip().split()

    path = '../files/'
    text_to_write = ' '.join(command[1:-2])
    file_redirect = command[-1]

    full_path = path + file_redirect

    if command[-2] == '>':
      with open(full_path, 'w') as file:
          file.write(text_to_write + '\n')

    elif command[-2] == '>>':
      with open(full_path, 'a') as file:
          file.write(text_to_write + '\n')

  def clear(self) -> None:
    os.system('clear')

  def exit(self) -> None:
    exit()

  def rm(self, attempt_command: str) -> None:
    command = attempt_command.strip().split()

    path = '../files/'
    name_file = command[1]
    full_path = path + name_file

    if os.path.isfile(full_path):
      os.remove(full_path)
      stdout.error(f"rm: '{name_file}' removed successfully")
    else:
      stdout.success(f'rm: cannot remove {name_file}: No such file or directory')
    
  def help(self) -> None:
    print("Commands:")
    print("touch <file_name> - Create a new file")
    print("echo <file_name> <new_content> - Edit a file")
    print("exit - Exit the program")
    print("clear - Clear the screen")