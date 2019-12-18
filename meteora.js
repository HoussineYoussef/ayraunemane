class meteora {
    constructor(dx , dy , ctx){
      this.x =Math.floor (Math.random()*1000 + 1000);
      this.y = Math.floor(Math.random() * 500 + 500); 
      this.dx = dx;
      this.dy = dy;
     
      this.ctx = ctx;  
      this.meteora = new Image();
      this.meteora.src = 'ressource/meteora.png';
      
  
      
    }
    draw_meteora(){
      ctx.drawImage(this.meteora, this.x, this.y,50,50);
     
    }
    move_meteora(){
      this.y += this.dy;
      this.x -= this.dx;
  }
    repop_meteora(){
      var compt = 0;
      ///// réaparition si sort du cadre 
        if(this.x < -50 || this.y > 550 ){
          this.x = Math.floor(Math.random()*1500);
          this.y = Math.floor(Math.random()* (-1000));
          this.dy = 2; // on reset la vitesse sinon ça croit vers l'infini et l'au dela
        
        }
        
        /// on évite que les obstacles  se superposent 
        meteo.forEach(met => {
         
            if (this.x < met.x +  33 &&
              this.x + 33 > met.x &&
              this.y < met.y +  22 &&
              22 + this.y > met.y) {
               // collision détectée !
               compt ++;
               if (compt > 1){
               this.y = Math.floor(Math.random()*(-500));
               }
           }
        });
    }
    //methode accélération 
    boost_meteora(){
      this.dx += 0.0005;
  
    }
  }