class TerminalMessage():
  def __init__(self) -> None:
    pass

  def error(self, message: str) -> None:
    print(f"\033[91m{message}\033[0m")
    
  def success(self, message: str) -> None:
    print(f"\033[92m{message}\033[0m")