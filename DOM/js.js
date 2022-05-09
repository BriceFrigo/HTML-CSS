let id1 = document.getElementById('section1');
id1.onclick = function(){

    alert(id1.innerHTML);
}

let span = document.getElementsByTagName("span");
span[0].onclick = function(){
    alert(span[0].innerHTML);
}

let lesDiv = document.getElementsByClassName("lesDiv");
for(let i = 0; i < lesDiv.length; i++){

lesDiv[i].onclick = function(){
    alert(lesDiv[i].innerHTML);
}
}



let p = document.querySelectorAll("p");
for(let i2 = 0; i2 < p.length; i2++){
p[i2].onclick = function(){
    p[i2].style.color = "Red";
}}


let google = document.getElementById("google")
google.href = "https://www.coca-cola-france.fr/";

let a = document.querySelectorAll(".tg");
for(let i3 = 0; i3 < tg.length; i3++){
    button[i3].onclick = function(){
        let a = Math.floor(Math.random() * 4)
        console.log(a)
        
        if (a <= 1){
            google.href = "https://www.coca-cola-france.fr/";
        }
        else if (a <= 2){
            this.style.color = "Cyan";
        }
        else if (a <= 3){
            this.style.color = "Orange";
        }
}}




