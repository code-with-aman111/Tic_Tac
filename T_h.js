let audio = new Audio('wa.mp3');
let audiowin=new Audio('win.mp3')
let boxes =Array.from(document.querySelectorAll('.box'));
let gif=document.querySelector('#imgb')
let final=document.querySelector('.info');
let currentPlayer = 'X'; 
let color='red';
function checkWinner(){
    const poss=[
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ]
    for (let element of poss) {
        const [a, b, c] = element;
        if (boxes[a].innerText !== '' && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            return boxes[a].innerText;
        }
    }
    return null;
}

boxes.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.innerText !== 'X' && element.innerText !== 'O') {
            audio.play();
            element.innerText = currentPlayer;
            element.style.backgroundColor = `${color}`;
              const winner=checkWinner();
              if(winner){
                final.innerText=`player ${winner} wins!`;
                 audiowin.play();
                 gif.style.opacity=1;
              }
            else{// Toggle between 'X' and 'O' for the next turn
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            color=element.style.backgroundColor ==='red'?'green':'red';
            }
        }
    });
});
let reset=document.querySelector('#reset');
 reset.addEventListener('click',()=>{
    boxes.forEach((element)=>{
        element.innerText='';
        element.style.backgroundColor='';
    })
 })
