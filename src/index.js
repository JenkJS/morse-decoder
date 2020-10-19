const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let letterLength = 10, text = [],  codeLetter;
    let words = expr.split('**********');
    words.forEach(word => {
        let newWord = '';
        for (let i = 0; i < word.length; i += letterLength) {
            codeLetter = word.substring(i, i + letterLength);
            let letter = '';
            for (let j = 0; j < letterLength; j += 2) {
                let code = codeLetter.substring(j, j + 2);
                switch (code) {
                    case '10':
                        letter += '.';
                        break;
                    case '11':
                        letter += '-';
                        break;
                }
            }
            newWord += MORSE_TABLE[letter];
        }
        text.push(newWord);
    });
    return text.join(' ');


}

module.exports = {
    decode
}