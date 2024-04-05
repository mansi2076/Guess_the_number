const randomnumber=parseInt(Math.random()*20+1);
const submit=documnent.querySelector('#subt');
const userinput=documnent.querySelector('#guessfield');
const guessslot=documnent.querySelector('.guess');
const remaining=documnent.querySelector('.lastresult');
const loworh1=documnent.querySelector('.loworhi');
const startover=documnent.querySelector('.resultparas');

const p=document.createElement('p');
let prevguess=[];
let numguess=1;
let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('NOT VALID !!!')
    }else if(guess<1){
        alert('NOT VALID !!!')
    }else if(guess>20){
        alert('NOT VALID !!!')
    }else{
        prevguess.push(guess)
        if(numguess===6){
            displayguess(guess)
            displaymessage(`Game over....^-^ Random number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess===randomnumber){
        displaymessage('You guessed right *-*')
        endgame()
    }else if(guess<randomnumber){
        displaymessage('Number is too low')
    }else if(guess>randomnumber){
        displaymessage('Number is too high')
    }
}
function displayguess(guess){
    userinput.value='';
    guessslot.innerHTML+='${guess},';
    newguess++;
    remaining.innerHTML='${6-newguess}';
}
function displaymessage(message){
    loworh1.innerHTML='<h2>${message}</h2>';
}
function endgame(){
    userinput.value='';
    userinput.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newgame">START NEW GAME</h2>';
    startover.appendChild(p)
    playgame=false
    newgame();
}
function newgame(){
    const newgamebutton=document.querySelector('newgame')
    newgamebutton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*20+1);
        prevguess=[]
        newguess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${6-newguess}`;
        userinput.removeAttribute('disable')
        startover.removeChild(p);
        playgame=true
    })
}
