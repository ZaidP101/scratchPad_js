let user = "X";
let arr = Array(9).fill(null);
let winner = document.getElementById('h1')


function checkWin() {
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]          
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {
            h1.innerHTML = `The Winner is: ${user}`;
            
            setTimeout(() => {
                document.body.innerHTML = '';

                const overText = document.createElement('h1');
                overText.innerText = `Game OVER : ${user} Lost!`;
                overText.style.position = 'fixed';
                overText.style.top = '50%';
                overText.style.left = '50%';
                overText.style.transform = 'translate(-50%, -50%)';
                overText.style.fontSize = '80px';
                overText.style.color = '#00ffc8';
                overText.style.fontFamily = 'Poppins, sans-serif';
                overText.style.textAlign = 'center';
                overText.style.textShadow = '0 0 10pxrgb(0, 0, 0)';

                document.body.appendChild(overText);
            }, 2000);

            return; 
        }
    }

    if (!arr.includes(null)) {
        h1.innerHTML = 'Match Draw!';
    }
}

function handleclick(el){
    const id = Number(el.id);
    if(arr[id] != null) return;
    arr[id] =  user;
    el.innerText = user;
    checkWin();
    user = user === "X" ? "0" : "X";
    console.log(arr);
}