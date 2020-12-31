class Food {
    constructor(){
    this.foodStock = 0;

    this.image = loadImage("milk.png");
    }
  
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
  
   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }
  
    getFoodStock(){
      return this.foodStock;
    }
  
    display(){
      var x=80,y=100;

      currentTime = hour();
  if (currentTime === (lastFeed + 1)) {
    update("Playing");
    milk.Garden();
  } else if(currentTime === (lastFeed + 2)) {
    update("Sleeping");
    milk.Bedroom();
  } else if (currentTime > (lastFeed + 2) && currentTime <= (lastFeed + 4)) {
    update("Bathing");
    milk.Washroom();
  } else {
    update("Hungry");
    milk.display();
  }
      
      imageMode(CENTER);
                   
      if(this.foodStock!=0){
        for(var i=0; i<this.foodStock; i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
    Garden(){
      background(garden);
    }
    Bedroom(){
      background(bedroom);
    }
    Washroom(){
      background(washroom);
    }
  }