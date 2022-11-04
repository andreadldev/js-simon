// ==================FUNCTIONS==================
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// =============================================

const randomNumbers = [];
const guessedNumbers = [];
const timerDisplay = document.getElementById("timer");
const numbers = document.getElementById("numbers");
const btn = document.getElementById("startBtn");


while (randomNumbers.length < 5) {
    let numbers = generateNumber(1, 100);
    if (randomNumbers.indexOf(numbers) === -1) {
        randomNumbers.push(numbers);
    }
}

btn.addEventListener("click", function() {
    numbers.innerHTML = `Numeri casuali: ${randomNumbers.join(' - ')}`;
    timerDisplay.innerHTML = "Conto alla rovescia: 3";
    btn.disabled = true;
    
    let i = 2;
    const timer = setInterval(function() {
        if (i === -1) {
            clearInterval(timer);
            numbers.innerHTML = "";
            timerDisplay.innerHTML = "";
            console.log(randomNumbers);
    
            setTimeout(function() {
                for (let x = 0; x < 5; x++) {
                    const insertNumber = Number(prompt("Inserisci uno alla volta i numeri visti in precedenza"));
                    if(randomNumbers.indexOf(insertNumber) !== -1 && guessedNumbers.indexOf(insertNumber) === -1) {
                        guessedNumbers.push(insertNumber);
                        console.log(`hai indovinato il numero ${insertNumber}`);
                    }
                }
    
                if (guessedNumbers.length === 0) {
                    console.log("Non hai indovinato nessun numero.");
                    btn.disabled = false;
                    }
                else {console.log(`Numeri indovinati: ${guessedNumbers.join(' - ')}`);
                     btn.disabled = false;}
            }, 0)
         
        }
        else {
            timerDisplay.innerHTML = `Conto alla rovescia: ${i}`;
            i--;
        }
    }, 1000)
})

