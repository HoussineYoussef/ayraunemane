window.onload = init;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
let canvas;
const obst = [];
var gameStatus=0;
canvas = document.querySelector("#Canvas");
  
//context graphique
ctx = canvas.getContext("2d");
var background = new Image();
background.src = "background.png"
var background_fin = new Image();
background_fin.src = "background_fin.png";


function handleKeydown(evt) {
  switch(evt.keyCode){
      case 38://haut
      pers.dy = -5;
      break;
      case 40://bas
      pers.dy = 5;
      break;
      case 37://gauche
      pers.dx = -5;
      break;
      case 39://droite
      pers.dx = 5;
      break;
      case 13:
      m.bouton_jouer()
      break;
      case 32:
        if (b.x > 1000){
           b.shoot();
        }
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
  ctx.drawImage(background,0,0); // on place le fond 
  
  if(gameStatus==0){
    m.menu();
    
    
  }
  else if (gameStatus == 2){
   
    m.menu_fin(); 
    

  }
  else if (gameStatus == 1){
    
  
  pers.draw();
  pers.move();
  pers.colide();
  b.draw_bullet();
  b.travel();
  b.colide_bullet();
  // obstacles 
  obst.forEach(element => {
    element.draw_obstacle();
    element.move_obstacle();
    element.repop_obstacle();
    
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