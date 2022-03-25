
w=0;
o=0;

function jijHebtGewonnen(){
    alert("jij hebt gewonnen 😍");
    w++;
    document.getElementById('b').innerHTML=w;
}

function speel(){
i=Math.floor(Math.random()*3);
    computer="";
    speeler=document.getElementById('a').value;
    if(i==0)
     computer="papier";
    if(i==1)
    computer="steen";
    if(i==2)
    computer="schaar";

    if(speeler=="papier" && computer=="steen" || speeler=="steen" && computer=="schaar" || speeler=="schaar" && computer=="papier" ){
        jijHebtGewonnen();
}

else if (speeler==computer){
    alert("gelijk 🤣");
}
else if(w>2){
    jijHebtGewonnen();
    document.getElementById("winaar").innerHTML="jij bent de winaar van deze potje👏";
   document.getElementById("knop").disabled = true;
   document.getElementById("opnieuw").disabled = false;
    
}


else if(o>2){
    alert("computer heeft gewonnen");
    o++;
    document.getElementById('c').innerHTML=o;
    document.getElementById("computer").innerHTML="De computer is gewonnen 💻";
    document.getElementById("knop").disabled = true;
    document.getElementById("opnieuw").disabled = false;
}


else{
    alert("verloor😢");
    o++;
    document.getElementById('c') .innerHTML=o;
}

}
function opnieuw(){
    location.href = location.href;
}
