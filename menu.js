class menu{
    menu(){
  
      //fond
      ctx.fillStyle = "black"; 
      ctx.fillRect(0,0,canvas.width,canvas.height);
  
      //bouton 
      ctx.fillStyle = "White";
      ctx.fillRect(400,125,315,80);

      ctx.font = "30px Arial";
      ctx.fillStyle = "blue";
      ctx.fillText("Press Enter to start",430, 175);
  
    }
    menu_fin(){
  
      //fond
      ctx.fillStyle = "black"; 
      ctx.fillRect(0,0,canvas.width,canvas.height);
  
      //bouton 
      ctx.fillStyle = "White";
      ctx.fillRect(400,125,315,80);

      ctx.font = "30px Arial";
      ctx.fillStyle = "blue";
      ctx.fillText("Fin",430, 175);
      
    }
    bouton_jouer(){
      gameStatus = 1;
    }
  }