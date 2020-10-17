module.exports = function toReadable (number) {
    let result = '';
    const stringNumber = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    const stringNumberTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return stringNumber[number]
    } else if (number >= 20 && number <= 99) {
        if (number % 10 == 0) {
            return(`${stringNumberTen[number / 10]}`)
        } else {
            return(`${stringNumberTen[Math.floor(number / 10)]} ${stringNumber[number % 10]}`)
        }
    
    } else if (number >= 100 && number <= 999) {
        let char = number % 100;
        if (number % 100 == 0) {
            return (`${stringNumber[number / 100]} hundred`);
        } else {
            if (number % 10 == 0) {
                return `${stringNumber[Math.floor(number / 100)]} hundred ${stringNumberTen[(number / 10) % 10]}`;
            } else {
                if (char < 20) {
                    return `${stringNumber[Math.floor(number / 100)]} hundred ${stringNumber[number % 100]}`

                } else {
                    return `${stringNumber[Math.floor(number / 100)]} hundred ${stringNumberTen[(Math.floor(number / 10)) % 10]} ${stringNumber[number % 10]}`
                }
            }
        }
    }
}
