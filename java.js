 let currentInput = document.querySelector('.currentInput');
 let  answerScreen = document.querySelector('.answerScreen');
 let buttons = document.querySelectorAll('button');
 let clearbtn = document.querySelector('#clear');
 let erasebtn = document.querySelector('#erase');
 let evaluate = document.querySelector('#evaluate');

 let realTimeScreenValue = [];

 clearbtn.addEventListener("click", ()=>{
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150,150,150,0.87)";
 
buttons.forEach((btn) => {
    if(!btn.id.match('erase')){
        realTimeScreenValue.push(btn.value)
        currentInput.innerHTML= realTimeScreenValue.join('');
        if(btn.classList.contains('num-btn')){
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
    }
    if(btn.id.match('erase')){
        realTimeScreenValue.pop();
        currentInput.innerHTML=realTimeScreenValue.join('');
        answerScreen.innerHTML=eval(realTimeScreenValue.join(''));
    }
    if(btn.id.match('evaluate')) {
        currentInput.className = 'anwerScreen';
        answerScreen.className = 'currentInput';
        answerScreen.style.color = "white";
    }

    if(typeof eval(realTimeScreenValue.join(''))=="undefined"){
        answerScreen.innerHTML = 0
    }
})
 })