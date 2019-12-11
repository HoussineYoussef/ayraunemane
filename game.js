window.onload = init;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
let canvas;
const obst = [];
const chargeur = [];
var gameStatus=0;
var score=0;
var seconds=0;
var compteurFPS = 0;


var premierTir = 0 ; 
var dernierTir = 1;

canvas = document.querySelector("#Canvas");
  
//context graphique
ctx = canvas.getContext("2d");
var background = new Image();
background.src = "ressource/background.png";


function handleKeydown(evt) {
  switch(evt.keyCode){
      case 38://haut
      pers.dy = -3;
      break;
      case 40://bas
      pers.dy = 3;
      break;
      case 37://gauche
      pers.dx = -3;
      
      break;
      case 39://droite
      pers.dx = 3;
      break;
      case 13:
      m.bouton_jouer()
      break;
      case 32:
      
      pers.shoot();
           
        
      break;
  }
}

function handleKeyup(evt) {
  switch(evt.keyCode){
      case 38://haut
      pers.dy = 0;
      
      break;
      case 40://bas
      pers.dy = 0;
      
      break;
      case 37://gauche
      pers.dx = 0;
      
      break;
      case 39://droite
      pers.dx = 0;
      
      break;
      case 27://echap
      document.location.reload(true);
      break;
      
  }
}





// classe obstacles apparition hasardeuse 





function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if(gameStatus==0){
    m.menu();
    
    
  }
  else if (gameStatus == 2){
   
    m.menu_fin(); 
    

  }
  else if (gameStatus == 1){
   
  compteurFPS++;
  seconds = compteurFPS/60;
  
  ctx.drawImage(background,0,0); // on place le fond 
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Score : " + score,10,30);
  ctx.fillText("Temps : " + Math.round(seconds),200,30);
  //Fonction pour dessiner ! 
  ////////////////////////////bloc à modifier /////////////////////////////////////
  if (pers.isShooting == 1){
    pers.draw_shooting();
  }
  else if (pers.dx == 0 && pers.dy == 0){
    pers.draw_neutre();
  }
  else {
    pers.draw_move();
  }
  /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  pers.move();
  pers.colide();
  ////// gestion des tirs /////////////////////////////
  chargeur.forEach(b => {
    b.draw_bullet();
    b.travel();
    b.colide_bullet();
    
  });
  
  ////////////////////////////////////////////////
  // obstacles 
  obst.forEach(element => {
    element.draw_obstacle();
    element.move_obstacle();
    element.repop_obstacle();
    element.boost();
    
  });
  
}
  
  

//////////////////////////////////////////////////////
  

  requestAnimationFrame(anime60fps);
  };

function init() {
  
  // après
  requestAnimationFrame(anime60fps);
  pers = new perso(300,180,0,0,ctx);
  m = new menu();
  b = new bullet (1100,-1000,7,ctx);

  
  for(let i = 0; i < 40; i++) {
    obst[i] = new obstacle(
                          -1,
                            0,
                            ctx);
  }
  
 
}