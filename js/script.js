const url = 'https://dummyjson.com/quotes';
const paragraphContainer = document.querySelector('.quote-container p')
const typingInput = document.querySelector(".container input");
let charIndex = 0;
let timeStamp = document.querySelector("#time-left");
const playBtn = document.querySelector("#play-btn");
const resetBtn = document.querySelector("#reset-btn");
const charCorrect = document.querySelector("#char-correct");
const charIncorrect = document.querySelector("#char-incorrect");
let charactersPerMinute = document.querySelector("#charactersperminute");
let wordsPerMinute = document.querySelector("#wordsperminute");
let scoreCorrect = 0;
let scoreIncorrect = 0;
let time;
let maxTime = 60;
let timeLeft = maxTime;
let isTyping;
let gameStarted = false;

async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ao acessar o servidor: ${response.status}`);

        const data = await response.json();
        displayQuote(data.quotes);
    } catch (error) {
        console.error('Falha ao acessar o servidor:', error);
    }
}

function displayQuote(quotes) {

    let randomIndex = Math.floor(Math.random() * quotes.length);

    let quote = quotes[randomIndex].quote.split("");

    quote.forEach(span => {
        let charSpan = `<span>${span}</span>`;
        paragraphContainer.innerHTML += charSpan;
    });

    document.addEventListener("keydown", () => {
        typingInput.focus()
    });
    paragraphContainer.addEventListener("click", () => typingInput.focus());
}

function startTyping() {

    if (typingInput.value === "") return;

    if(!isTyping){
        time = setInterval(timer, 1000);
        isTyping = true;
    }
    
    const chars = paragraphContainer.querySelectorAll("span");
    let charTyped = typingInput.value.split("")[charIndex];
    
    if (chars[charIndex].innerText === charTyped) {
        chars[charIndex].classList.add("correct");
        scoreCorrect++
    } else {
        chars[charIndex].classList.add("incorrect");
        scoreIncorrect++;
    }

    charIndex++;
    charCorrect.innerText = scoreCorrect;
    charIncorrect.innerText = scoreIncorrect;
    charactersPerMinute.innerText = charIndex;

    let wpm = 0;
    if (maxTime - timeLeft > 0) {
        wpm = Math.round((((charIndex - scoreIncorrect)/ 5) / (maxTime - timeLeft))*60);
    }
    wordsPerMinute.innerText = wpm;
}

function timer (){
    if(timeLeft > 0){
        timeLeft--;
        timeStamp.innerText = timeLeft;
    } else {
        clearInterval(time);
        typingInput.value="";
    }
}; 

function resetGame(){
    clearInterval(time);
    timeLeft = maxTime;
    timeStamp.innerText = timeLeft;
    isTyping = false;
    gameStarted = false;
    typingInput.value="";
    charIndex = 0;
    charCorrect.innerText = 0;
    charIncorrect.innerText = 0;
    charactersPerMinute.innerText = 0;
    wordsPerMinute.innerText = 0;
    paragraphContainer.innerHTML = "";
    getData();
}

getData();

typingInput.addEventListener("input", () => {
    if(gameStarted) {
        startTyping();
    }
})

playBtn.addEventListener("click", () => {
    playBtn.classList.toggle("hidden");
    resetBtn.classList.toggle("hidden");
    gameStarted = true;
    startTyping();
}
)

resetBtn.addEventListener("click", ()=>{
    playBtn.classList.toggle("hidden");
    resetBtn.classList.toggle("hidden");
    resetGame();
})