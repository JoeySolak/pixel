function Pixel(r,g,b){
this.red=r;
this.green=g;
this.blue=b;
    //declare red
    //declare green
    //declare blue


    this.addRed = function(n){
      this.red=this.red + n;
      if(this.red>255){
          this.red=255;
      }
      if(this.red<0){
        this.red=0;
    }
    };

    this.addGreen = function(n){
        this.green=this.green + n;
      if(this.green>255){
        this.green=255;
      }
      if(this.green<0){
        this.green=0;
      }
        //code in here
    };

    this.addBlue = function(n){
        this.blue=this.blue + n;
      if(this.blue>255){
        this.blue=255;
      }
      if(this.blue<0){
        this.blue=0;
      }
        //code in here
    };

    this.brighten = function(n){
      this.red=this.red + this.red*n;
      this.green=this.green + this.green*n;
      this.blue=this.blue + this.blue *n;

      if(this.red>255){
          this.red=255;
      }
      if(this.red<0){
          this.red=0;
      }
      if(this.green>255){
          this.green=255;
      }
      if(this.green<0){
          this.green=0;
      }
      if(this.blue>255){
          this.blue=255;
      }
      if(this.blue<0){
          this.blue=0;
      }
        //code in here
};
    this.complement = function(n){
        let r=255-this.red;
        let g=255-this.green;
        let b=255-this.blue;
        return new Pixel(r,g,b);
        //code in here
    };

    this.grayScale = function(n){
        //code in here
    };


}

function report(mypixel){
    //reduces redundancy of code.
    console.log("My red is :"+mypixel.red);
    console.log("My green is :"+mypixel.green);
    console.log("My blue is :"+mypixel.blue);
}

//declares a main method to test the code.
function main(){

    //creates a Pixel-object
    let rectangle = new Pixel(200,100,120);

    //use a report to test each function
    report(rectangle);

    rectangle.addRed(60);
    rectangle.addGreen(60);
    rectangle.addBlue(60);

    console.log("------Added 60 to each value above------");
    report(rectangle);

    rectangle.brighten(-0.40);
    console.log("------Reduced brightness by 40%------");
    report(rectangle);

    rectangle.complement();
    console.log("------Complement to the previous color------");
    report(rectangle);

    rectangle.grayScale();
    console.log("------Averages the 3 values from the brighten example------");
    report(rectangle);


}

//runs the code
main();
