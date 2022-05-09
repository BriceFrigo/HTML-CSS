/* 1 déclarer les variable */

let btn = document.querySelector('#btn');
let carre = document.querySelector('.rose');
let x = 0;
let y = 0;

/* 2 fonctions  action prévues pour interagir avec un user*/
function deplacer(){
    
    // augmenter la valeur de la variable de 10px
    x += 10;
    // applique le changement de style
    carre.style.left = x + 'px';
}

function deplacer2(){
    x -= 10;
    carre.style.left = x + 'px';
}

function deplacer3(){
    y += 10;
    carre.style.bottom = y + 'px';
}

function deplacer4(){
    y -= 10;
    carre.style.bottom = y + 'px';
}
// Changer la couleur du fond du carre
// variable.style.backgroundColor

btn.addEventListener('click', function(){
    carre.style.backgroundColor = 'purple'
})



/* 3 Ecouteur évènements avec appele des fonctions */
btn.addEventListener('click', deplacer);
btn2.addEventListener('click', deplacer2);
btn3.addEventListener('click', deplacer3);
btn4.addEventListener('click', deplacer4);

/* Autre  ecritur -fonction limiter
    on ecrit  la fonction dans lécouteur
*/
btn.addEventListener('click', function(){
    carre.style.border = '2px dashed lightblue';
});

window.addEventListener('keydown', function(e){
    switch(e.key){
        case 'ArrowRight':
            deplacer()
            carre.style.backgroundColor = 'Red';
            carre.style.border = '2px solid lightblue';
            carre.style.borderRadius = '0 100px 0 100px'
        break;
        case 'ArrowLeft':
            deplacer2()
            carre.style.backgroundColor = 'Cyan';
            carre.style.border = '2px dashed purple';
            carre.style.borderRadius = '50px 0px 50px 0px'
        break;
        case 'ArrowUp':
            deplacer3()
            carre.style.backgroundColor = 'Purple';
            carre.style.border = 'thick double Pink';
            carre.style.borderRadius = '20px 0px 30px 0px'
        break;
        case 'ArrowDown':
            deplacer4() 
            carre.style.backgroundColor = 'Yellow';
            carre.style.border = '2px dashed lightblue';
        break;

        default: 
        break;
    }
});