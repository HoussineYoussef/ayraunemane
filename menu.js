class menu{
  constructor(){
    this.background_debut = new Image();
    this.background_debut.src = "ressource/background_debut.png";
    this.background_fin = new Image();
    this.background_fin.src = "ressource/background_fin.png";
    this.music_debut = new Audio("ressource/soundtrack_debut.mp3");
    this.musique_fin = new Audio("ressource/soundtrack_fin.mp3");
  }
  menu(){
    this.music_debut.play();
    
    //fond
    ctx.drawImage(this.background_debut,0,0 , 1000,500);   
    //bouton 
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(343,280,315,80);

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Press Enter to start",370, 330);


  }
  menu_fin(){
    this.musique_fin.play();
    //fond
    ctx.drawImage(this.background_fin,0,0, 1000,500);

    //bouton 
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(343,210,315,80);

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Score obtenu : " + score,10,30);
    ctx.fillText("Temps de jeu : " + Math.round(seconds/60) +" secondes",300,30);
    ctx.fillText("Press Esc to restart",370, 260);

    
    
  }
  bouton_jouer(){
    this.music_debut.pause();
    
    gameStatus = 1;

  }
}