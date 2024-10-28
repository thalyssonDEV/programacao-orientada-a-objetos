// 7. Implemente a questão do ControleDeAudio acima em outra linguagem que não seja TypeScript.

#include <iostream>
#include <string>
#include <vector>
using namespace std;

class ControleDeAudio {
private:
    int volume;

public:
    ControleDeAudio(int volume) {
        this->volume = volume;
    }

    void increaseVolume() {
        if (this->volume == 10) {
            cout << "\033[31mMaximum Volume Reached\033[0m" << endl;
        } else {
            this->volume++;
            cout << "\033[92mVolume Increased\033[0m" << endl;
        }
    }

    void decreaseVolume() {
        if (this->volume == 0) {
            cout << "\033[31mMinimum Volume Reached\033[0m" << endl;
        } else {
            this->volume--;
            cout << "\033[91mVolume Decreased\033[0m" << endl;
        }
    }

    int readVolume() {
        return this->volume;
    }
};

class Menu {
private:
    static vector<string> options;

public:
    static void showMenu() {
        for (const string &option : options) {
            cout << option << endl;
        }
    }
};

vector<string> Menu::options = {
    " [ 1 ] - Increase Volume",
    " [ 2 ] - Decrease Volume",
    " [ 3 ] - Show Volume"
};

int main() {
    system("clear");
    const int initialVolume = 2;

    ControleDeAudio sound(initialVolume);

    while (true) {
        Menu::showMenu();

        int choice;
        cout << "\nEnter Your Option: ";
        cin >> choice;

        switch (choice) {
            case 1:
                sound.increaseVolume();
                break;
            case 2:
                sound.decreaseVolume();
                break;
            case 3:
                cout << "\033[94mVolume -\033[0m " << sound.readVolume() << endl;
                break;
            default:
                cout << "Invalid option, please try again." << endl;
        }
    }
    return 0;
}
