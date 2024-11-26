
let radio = document.querySelector('.manual-btn');
let cont = 1;

document.getElementById('radio1').checked =true;

setInterval(() =>{
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked =true;
}
const chk = document.getElementById('chk');

chk.addEventListener('change',() => {
    document.body.classList.toggle("dark-theme")
});
