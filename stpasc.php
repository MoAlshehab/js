 <!DOCTYPE html> 
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steen papier schaar </title>
    <link rel="stylesheet" type="text/css" href="stpasc.css">
</head>
<body>

Kies
    <select id="a">
        <option value="steen">Steen👊</option>
        <option value="papier">Papier🖐</option>
        <option value="schaar">Schaar ✌</option>
    </select>
<button id="knop" onclick="speel()">Speel</button>
<br>

  Jij <h1 id="b">0</h1>
  <br>
 Computer <h1 id="c">0</h1>
  totaal<h1 id="winaar"></h1>
  <h1 id="computer"></h1>
  <button id="opnieuw" disabled = "true" onclick="opnieuw()">Opnieuw</button>
 
 <script src="stpasc.js"> </script>
</body>
</html>
