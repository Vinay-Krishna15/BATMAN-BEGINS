class Drops {     
  constructor(x,y,r)
  {
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2

          }
       
      this.body=Bodies.circle(x,y,r/2,options)
      World.add(world, this.body);
      
      this.x=x;
      this.y=y;
      this.r=r;  
     
  }        
  display()
  {
    var drops;
    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
      drops.push(new createDrops(random(0,100), random(0,100)));
    }

      var paperpos=this.body.position;

      push()
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER)
      strokeWeight(9);
      fill("blue")
      ellipse(0,0,this.r);
      pop()
     
  }       
            
}