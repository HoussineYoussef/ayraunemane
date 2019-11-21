class menu{
  menu(){
    
    //fond
    ctx.drawImage(background_debut,0,0 , 1000,500);   
    //bouton 
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(343,280,315,80);

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Press Enter to start",370, 330);


  }
  menu_fin(){

    //fond
    ctx.drawImage(background_fin,0,0, 1000,500);

    //bouton 
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(343,210,315,80);

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Press Esc to restart",370, 260);

    
    
  }
  bouton_jouer(){
    gameStatus = 1;
  }
}