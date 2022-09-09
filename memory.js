
    
    var userClick1 = 0;
    var userClick2 = 0;
    var teller = 0;
    var userSelectedCard1 = '';
    var userSelectedCard2 = '';
    function checkClickedCard(cardNum, cardId){
        //geklikte kaart disabelen, want je mag maar 1 keer op dezelfde kaart klikken
        document.getElementById(cardId).disabled = true;
        //juist waarde op de kaart tonen. Kaart omdraaien
        //document.getElementById(cardId).value = cardNum ;
        //Lees en onthoud klik 1 en klik 2
    
            if(userClick1==0){
                document.getElementById("klik").play(); 
                userClick1 = cardNum;
                userSelectedCard1 = cardId;
                teller++;
                document.getElementById(userSelectedCard1).style = "background: url(fotos/"+ cardNum+ ".png)";
               // document.getElementById(userSelectedCard1).style = "img: url(02.png)";
                document.getElementById("atk").innerHTML=teller;
                
        }else{
           
            userClick2 = cardNum;
            userSelectedCard2 = cardId;
            document.getElementById("klik").play(); 
            document.getElementById(userSelectedCard2).style = `background: url(fotos/${cardNum}.png)`;
         
        }
        if(userClick2!=0){
            if(userClick1==userClick2){
                document.getElementById("goed").play(); 
                document.getElementById(userSelectedCard2).style = "background: url(fotos/"+ cardNum+ ".png)";
              
                
            }else{
                const myTimeout = setTimeout(myGreeting, 2000);
               
    
               
            }
            userClick1 = 0;
            userClick2 = 0;
          
        }
    } 
    
    function myGreeting(){
                document.getElementById(userSelectedCard1).disabled = false;
                document.getElementById(userSelectedCard2).disabled = false;
                document.getElementById(userSelectedCard1).value = '';
                document.getElementById(userSelectedCard2).value = '';
            document.getElementById(userSelectedCard1).style = "background: url(fotos/wv1.jpg)";
            document.getElementById(userSelectedCard2).style = "background: url(fotos/wv1.jpg)";
                document.getElementById("geluid").play(); 
    }
         var  numberOfCards =16;
    
    // dit regelt dat elke keer ander plaatsen wordt
    function shuffleCards() {
        var numbers = new Array();
        var htmlDivStr = '';
        var teller = 0;
       
        //Random nummer ophalen
        while (teller < numberOfCards) {
            var randomNumber = (Math.random() * (numberOfCards / 2)) + 1;
            randomNumber = Math.floor(randomNumber);
            if (numbers[randomNumber] != 2) {
                if (numbers[randomNumber] == 1) {
                    numbers[randomNumber] = '2';
                } else {
                    numbers[randomNumber] = '1';
                }
                htmlDivStr = htmlDivStr + '<input type="image" value="" id="kaart' + teller + '" class="memoryCard" onclick="checkClickedCard(' + randomNumber + ', \'kaart' + teller + '\');" />';
                teller++;
            }
        }
        document.getElementById("memoryCards").innerHTML = htmlDivStr;
    }
    
   