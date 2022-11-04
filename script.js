function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randomNumbers = [];

while (randomNumbers.length < 5) {
    let numbers = generateNumber(1, 100);
    randomNumbers.push(numbers);
}

document.querySelector(".container").innerHTML = `Numeri casuali: ${randomNumbers.join(' - ')}`;