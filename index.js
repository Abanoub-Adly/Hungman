const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = letters.split("");
let letterContainer = document.querySelector(".letters");
lettersArray.forEach((letter)=>{
    let span = document.createElement("span");
    span.classList = "letter_box";
    let spanText =document.createTextNode(letter);
    span.appendChild(spanText);
    letterContainer.appendChild(span);
})
const words = {
    Animals: ["cat", "dog", "elephant", "giraffe", "monkey", "tiger", "lion", "bear", "zebra", "hippopotamus", "rhinoceros", "crocodile", "penguin", "dolphin", "whale", "shark", "octopus", "lobster", "jellyfish"],
    Fruits: ["apple", "banana", "orange", "mango", "grape", "strawberry", "kiwi", "pineapple", "watermelon", "peach", "pear", "coconut", "cherry", "blueberry", "raspberry", "plum", "lemon", "lime", "pomegranate"],
    Sports:["basketball", "football", "tennis", "golf", "hockey", "baseball", "soccer", "swimming", "boxing", "cricket", "rugby", "volleyball", "wrestling", "skiing", "snowboarding", "figure-skating", "surfing", "cycling", "horse-riding"],
    Colors:["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "brown", "gray", "beige", "navy", "turquoise", "maroon", "olive", "magenta", "teal", "ivory"],
    Food: ["pizza", "hamburger", "sushi", "taco", "spaghetti", "chicken", "steak", "salad", "sandwich", "pancake", "waffle", "omelette", "lasagna", "soup", "stew", "curry", "burrito", "falafel", "ramen"],
    Musical_Instruments:["guitar", "piano", "violin", "trumpet", "drums", "flute", "saxophone", "harp", "clarinet", "accordion", "banjo", "harmonica", "bagpipes", "ukulele", "trombone", "bassoon", "xylophone", "maracas"],
    Jobs:["doctor", "lawyer", "teacher", "engineer", "scientist", "artist", "chef", "nurse", "pilot", "programmer", "writer", "designer", "athlete", "politician", "firefighter", "dentist", "musician", "architect", "psychologist"],
    Transportation:["Car","Truck","Bus","Train","Bicycle","Motorcycle","Boat","Airplane","Helicopter","Scooter","Segway","Skateboard","Rollerblades","Jet ski","Ferry","Tram","Cable car","Submarine","Hot air balloon","Zeppelin"],
    programming : ["Python","Java","C++","JavaScript","Ruby","Swift","Kotlin","TypeScript","PHP","Go","Rust","Dart","Lua","Julia","R","Perl","Perl","x","Assembly","Shell","SQL"],
    movies : ["Prestige","Inception","Parasite","Interstellar","Whiplash","Memento","Coco","up"],
    people : ["Albert Einstein","Hitchcock","Alexander","Cleopatra","Mahatma Ghandi"],
    countries :  ["china", "france", "italy", "japan", "spain", "brazil", "india", "mexico", "australia", "canada", "argentina", "germany", "egypt", "greece", "israel", "ireland", "southafrica", "southkorea", "newzealand"]
}
/*get random key*/
let allkeys = Object.keys(words);
let randompropNumber = Math.floor(Math.random() * allkeys.length);
let randompropName = allkeys[randompropNumber];
let randompropvalue = words[randompropName];
let randomvaluenumber = Math.floor(Math.random() * randompropvalue.length);
let randompropvaluevalue =randompropvalue[randomvaluenumber];
document.querySelector(".game-info .category span").innerHTML = randompropName;
let lettersGuessContainer = document.querySelector(".letters-guess");
let letterAndSpace = Array.from(randompropvaluevalue.toLowerCase());
letterAndSpace.forEach((letter)=>{
    let wordSpan = document.createElement("span");
    if(letter === " "){
        wordSpan.classList = "has-space";
    }
    lettersGuessContainer.appendChild(wordSpan);
})
letterAndSpace = letterAndSpace.filter((span)=>{
    return span !== " ";
})
let GuessSpans = document.querySelectorAll(".letters-guess span");
let theAttempts = 0;
let thedraw = document.querySelector(".hangman-draw");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let answerAarray = [];
document.addEventListener("click",(e)=>{
    let theStatus = false;
    if(e.target.className === "letter_box"){
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();
    let chosenWord = Array.from(randompropvaluevalue.toLowerCase());
    chosenWord.forEach((wordletter , wordindex )=>{
    if(wordletter === theClickedLetter){
        theStatus = true;
    GuessSpans.forEach(((guessspan , spanindex)=>{
        if(wordindex === spanindex){
            guessspan.classList.add("gessSpan");
        guessspan.innerHTML = theClickedLetter;
        answerAarray[wordindex] = theClickedLetter;
        }
    }))
    }
    })
    if(theStatus !== true){
        fail.play();
        theAttempts++;
        thedraw.classList.add(`wrong-${theAttempts}`);
        if(theAttempts === 8){
            endGame();
            letterContainer.classList.add("finished");
        }
    }else{
        success.play();
    }
    }
    if(answerAarray.join("") === letterAndSpace.join("")){
        succGame();
        letterContainer.classList.add("finished");
        console.log(answerAarray.join(""))
    }
})
function endGame(){
    let div = document.createElement("div");
    let divText =document.createTextNode(`Game Over, The Word IS ${randompropvaluevalue}`);
    div.appendChild(divText);
    div.classList.add("popup");
    document.body.appendChild(div);
}
function succGame(){
    let Beginer = document.createTextNode(`Congratulations,You Win!!, |  ${`Beginer`} |`);
    let professional = document.createTextNode(`Congratulations,You Win!!, |  ${`Professional`} |`);
    let medium = document.createTextNode(`Congratulations,You Win!!, |  ${`Medium`} |`);
    let divon = document.createElement("div");
    divon.className = "popupsuccess";
    if(theAttempts <=3){
        divon.appendChild(professional)
    }
    else if(theAttempts >= 4 && theAttempts <=5){
        divon.appendChild(medium)
    }
    else if(theAttempts >= 6){
        divon.appendChild(Beginer)
    }
    document.body.appendChild(divon);
}



