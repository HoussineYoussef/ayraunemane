window.onload = init;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
let canvas;
const obst = [];
var gameStatus=0;

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
        
    }
}





// classe obstacles apparition hasardeuse 





function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if(gameStatus==0){
    m.menu();
    //m.bouton_jouer();
    
  }
  else{
    
  
  pers.draw();
  pers.move();
 pers.colide();
  

  
  
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
  
  canvas = document.querySelector("#Canvas");
  
  //context graphique
  ctx = canvas.getContext("2d");
  // après
  requestAnimationFrame(anime60fps);
  pers = new perso(300,180,0,0,ctx);
  m = new menu();
  
  for(let i = 0; i < 50; i++) {
    obst[i] = new obstacle(
                          -1,
                            0,
                            ctx);
  }
  
 
}