// ==================FUNCTIONS==================
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// =============================================

const randomNumbers = [];
const guessedNumbers = [];
const timerDisplay = document.getElementById("timer");
const numbers = document.getElementById("numbers");


while (randomNumbers.length < 5) {
    let numbers = generateNumber(1, 100);
    if (randomNumbers.indexOf(numbers) === -1) {
        randomNumbers.push(numbers);
    }
}

console.log(randomNumbers.indexOf);

numbers.innerHTML = `Numeri casuali: ${randomNumbers.join(' - ')}`;
timerDisplay.innerHTML = "Conto alla rovescia: 3";

let i = 2;
const timer = setInterval(function() {
    if 
        (i === -1) {
        clearInterval(timer);
        numbers.innerHTML = "";
        timerDisplay.innerHTML = "";
        console.log(randomNumbers);

        setTimeout(function() {
            for (let x = 0; x < 5; x++) {
                const insertNumber = prompt("Inserisci uno alla volta i numeri visti in precedenza");

                for (let y = 0; y < randomNumbers.length; y++) {
                    if 
                        (insertNumber == randomNumbers[y]) {
                        console.log(`hai indovinato il numero ${randomNumbers[y]}`);
                        guessedNumbers.push(`${randomNumbers[y]}`);
                    };
                }
            }
            if 
                (guessedNumbers.length === 0) {
                console.log("Non hai indovinato nessun numero.");
                }
            else 
                {console.log(`Numeri indovinati: ${guessedNumbers.join(' - ')}`);}
        }, 0)
     
    }
    else 
        {timerDisplay.innerHTML = `Conto alla rovescia: ${i}`;
        i--;
    }
}, 1000)