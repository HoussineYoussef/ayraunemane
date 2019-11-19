class menu{
    menu(){
  
            //fond
            ctx.drawImage(background,0,0);   
      //bouton 
      ctx.fillStyle = "White";
      ctx.fillRect(343,210,315,80);

      ctx.font = "30px Arial";
      ctx.fillStyle = "red";
      ctx.fillText("Press Enter to start",370, 260);
  
  
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