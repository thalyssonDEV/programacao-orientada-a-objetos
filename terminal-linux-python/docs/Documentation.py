import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'colors')))

from colors import *

class Documentation:
    @staticmethod
    def show_help() -> None:
        print(f"""
{BOLD}{LIGHT_BLUE}touch{RESET} {BOLD}<filename>{RESET}
        {BOLD}{LIGHT_YELLOW}Creates a new file with the specified name{RESET}
        {BOLD}{LIGHT_GREEN}Example:{RESET}
            touch new_file.txt

{BOLD}{LIGHT_BLUE}echo{RESET} {BOLD}<text> > <filename>{RESET}
        {BOLD}{LIGHT_YELLOW}Writes the specified text to the file, overwriting the previous content{RESET}
        {BOLD}{LIGHT_GREEN}Example:{RESET}
            echo "Hello, World!" > file.txt

{BOLD}{LIGHT_BLUE}echo{RESET} {BOLD}<text> >> <filename>{RESET}
        {BOLD}{LIGHT_YELLOW}Appends the specified text to the end of the file{RESET}
        {BOLD}{LIGHT_GREEN}Example:{RESET}
            echo "Bye, World!" >> file.txt

{BOLD}{LIGHT_BLUE}clear{RESET}
        {BOLD}{LIGHT_YELLOW}Clears the terminal screen{RESET}

{BOLD}{LIGHT_BLUE}rm{RESET} {BOLD}<filename>{RESET}
        {BOLD}{LIGHT_YELLOW}Removes the specified file{RESET}
        {BOLD}{LIGHT_GREEN}Example:{RESET}
            rm file.txt

{BOLD}{LIGHT_BLUE}mv{RESET} {BOLD}<filename> <new_name>{RESET}
        {BOLD}{LIGHT_YELLOW}Renames or moves the specified file to the new name{RESET}
        {BOLD}{LIGHT_GREEN}Example:{RESET}
            mv file.txt new_name.txt

{BOLD}{LIGHT_BLUE}exit{RESET}
        {BOLD}{LIGHT_YELLOW}Exits the terminal{RESET}

{BOLD}{LIGHT_BLUE}help{RESET}
        {BOLD}{LIGHT_YELLOW}Displays this help message{RESET}
""")