const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let nnmmnm = expr.split('**********');
    let temp = []

    for (let i = 0; i < nnmmnm.length; i++) {
        let acc = '';
        temp[i] = acc;

        for (let j = 0; j <= nnmmnm[i].length; j += 2) {
            if (j % 10 == 0 && j != 0) {
                temp[i] += MORSE_TABLE[acc];
                acc = '';
            }
            if (nnmmnm[i][j] + nnmmnm[i][j + 1] == '10') {
                acc += '.';
            } else if (nnmmnm[i][j] + nnmmnm[i][j + 1] == '11') {
                acc += '-';
            }
        }

    }

    return temp.join(' ').trim();
}

module.exports = {
    decode
}