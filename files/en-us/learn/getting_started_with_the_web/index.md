<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assingment</title>
    <link rel="stylesheet" href="style.css">
  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=bangers&display=swap" rel="stylesheet">
  
  </head>
  
  <body>
    <div id="gameTitle">Shooting Arena</div>
    <div class="arena">
  
      <!-- Player 1 -->
      <div id="p1banner">
        <h2>Player 1</h2>
      </div>
      <div id="p1">
        <img src="pngegg (2).png"Player 1" height="80px" width="110px">
      </div>
      <div id="p1banner23">
        <img src="fb1 (2).png" height="90px" width="130px" alt="p1Fire"> <span id="p1FireScore"></span>
      </div>
  
      <!-- Player 2 -->
      <div id="p2banner">
        <h2>Player 2</h2>
      </div>
  
      <div id="p2">
  
        <img src="pngegg (1).png" alt="Player 1" height="80px" width="110px">
  
      </div>
      <div id="p2banner24">
        <img src="fb1.png" height="90px" width="130px"  alt="p2Fire"> <span id="p2FireScore"></span>
      </div>
  
    </div>
  
    <!-- Assigning Buttons  -->
    <br>
    <Button id="ShootBtn" onclick="shootBtn()">Shoot</Button>
  
    <span>
      <button id="resetBtn" onclick="resetBtn()">Reset Button</button>
    </span>
  
    <br><br>
  
    <div class="Score-Board">
      <div class="grid-item" id="grid-item-1">Player 1</div>
      <div class="grid-item" id="grid-item-3">Win</div>
      <div class="grid-item" id="grid-item-4">0</div>
      <div class="grid-item" id="grid-item-5">Player 2</div>
      <div class="grid-item" id="grid-item-7">Win</div>
      <div class="grid-item" id="grid-item-8">0</div>
  
    </div>
   
    <div class="result">
      <div class="result-item" id="grid-item-9"></div>
    </div>
  
    <script src="script.js"></script>
  </body>
