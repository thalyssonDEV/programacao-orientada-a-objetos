// Arquivo que contém os códigos ANSCI das cores para colorir variáveis em Typescript

export enum cores {
    reset = '\x1b[0m',
    preto = '\x1b[30m',
    pretoNegrito = '\x1b[1m\x1b[30m',
    vermelho = '\x1b[31m',
    vermelhoNegrito = '\x1b[1m\x1b[31m',
    verde = '\x1b[32m',
    verdeNegrito = '\x1b[1m\x1b[32m',
    amarelo = '\x1b[33m',
    amareloNegrito = '\x1b[1m\x1b[33m',
    azul = '\x1b[34m',
    azulNegrito = '\x1b[1m\x1b[34m',
    magenta = '\x1b[35m',
    magentaNegrito = '\x1b[1m\x1b[35m',
    ciano = '\x1b[36m',
    cianoNegrito = '\x1b[1m\x1b[36m',
    branco = '\x1b[37m',
    brancoNegrito = '\x1b[1m\x1b[37m',
    pretoBrilhante = '\x1b[90m',
    pretoBrilhanteNegrito = '\x1b[1m\x1b[90m',
    vermelhoBrilhante = '\x1b[91m',
    vermelhoBrilhanteNegrito = '\x1b[1m\x1b[91m',
    verdeBrilhante = '\x1b[92m',
    verdeBrilhanteNegrito = '\x1b[1m\x1b[92m',
    amareloBrilhante = '\x1b[93m',
    amareloBrilhanteNegrito = '\x1b[1m\x1b[93m',
    azulBrilhante = '\x1b[94m',
    azulBrilhanteNegrito = '\x1b[1m\x1b[94m',
    magentaBrilhante = '\x1b[95m',
    magentaBrilhanteNegrito = '\x1b[1m\x1b[95m',
    cianoBrilhante = '\x1b[96m',
    cianoBrilhanteNegrito = '\x1b[1m\x1b[96m',
    brancoBrilhante = '\x1b[97m',
    brancoBrilhanteNegrito = '\x1b[1m\x1b[97m',
}

export enum fundo {
    fundoPreto = '\x1b[40m',
    fundoVermelho = '\x1b[41m',
    fundoVerde = '\x1b[42m',
    fundoAmarelo = '\x1b[43m',
    fundoAzul = '\x1b[44m',
    fundoMagenta = '\x1b[45m',
    fundoCiano = '\x1b[46m',
    fundoBranco = '\x1b[47m',
    fundoPretoBrilhante = '\x1b[100m',
    fundoVermelhoBrilhante = '\x1b[101m',
    fundoVerdeBrilhante = '\x1b[102m',
    fundoAmareloBrilhante = '\x1b[103m',
    fundoAzulBrilhante = '\x1b[104m',
    fundoMagentaBrilhante = '\x1b[105m',
    fundoCianoBrilhante = '\x1b[106m',
    fundoBrancoBrilhante = '\x1b[107m',
}