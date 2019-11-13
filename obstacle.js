class obstacle {
  constructor(dx , dy , ctx){
    this.x =Math.floor (Math.random()*1000 + 1000);
    this.y = Math.floor(Math.random() * 500); 
    this.dx = dx;
    this.dy = dy;
    this.ctx = ctx;  
    this.image = new Image();
    this.image.src = 'missile.png';

    //this.image.src = 'missile.jpg';
  }
  draw_obstacle(){
    ctx.drawImage(this.image, this.x, this.y,30,30);
    //ctx.fillStyle = "blue"; 
    //ctx.fillRect(this.x,this.y,30,30);
  }
  move_obstacle(){
    this.y += this.dy;
    this.x += this.dx;
}
  repop_obstacle(){
    var compt = 0;
    ///// réaparition si sort du cadre 
      if(this.x < -33){
        this.x = Math.floor(Math.random()*300 + 1000);
      }
      /// on évite que les obstacles se superposent
      obst.forEach(element => {
       
          if (this.x < element.x +  33 &&
            this.x + 33 > element.x &&
            this.y < element.y +  33 &&
            33 + this.y > element.y) {
             // collision détectée !
             compt ++;
             if (compt > 1){
             this.x = Math.floor(Math.random()*300 + 1000);
             }
         }
      });
    };
  }