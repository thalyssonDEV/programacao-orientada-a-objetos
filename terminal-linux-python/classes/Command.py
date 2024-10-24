import os

class Command:
  def __init__(self) -> None:
    pass

  def touch(self, attempt_command: str):
    command = attempt_command.strip().split()

    path = '../files/'
    file_name = command[1]
    full_path = os.path.join(path, file_name)

    os.makedirs(path, exist_ok=True)

    with open(full_path, "x"):
      pass

  def echo(self, attempt_command: str):
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

  def clear(self):
    os.system('clear')

  def exit(self):
    exit()