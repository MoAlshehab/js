 <!DOCTYPE html> 
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steen papier schaar </title>
    <style>


        button{
            color:red;
            border-radius: 100px;
            width: 100px;
            height: 100px;
        }
        body{
        
            font-size: 25px;
            color:yellowgreen;
            padding-left: 300px;
            background-image:url("sps.jpg");
            background-size: cover;
        }
    </style>
</head>
<body>

Kies
    <select id="a">
        <option value="steen">Steen👊</option>
        <option value="papier">Papier🖐</option>
        <option value="schaar">Schaar ✌</option>
    </select>
<button onclick="speel()">Speel</button>
<br>

  Jij <h1 id="b">0</h1>
  <br>
 Computer <h1 id="c">0</h1>
 <script type="text/javascript">
w=0;
o=0;
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
    alert("jij hebt gewonnen 😍");
    w++;
    document.getElementById('b').innerHTML=w;
}

else if (speeler==computer){
    alert("gelijk 🤣");
}
else if(w==2){
    document.write("jij bent de winaar van deze potje👏")
}

else if(o==2){
    document.write("De computer is gewonnen 💻")
}


else{
    alert("verloor😢");
    o++;
    document.getElementById('c') .innerHTML=o;
}
}
 </script>
</body>
</html>
<?php


?>