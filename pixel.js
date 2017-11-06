function Pixel(r,g,b){
this.red=r;
this.green=g;
this.blue=b;
    //declare red
    //declare green
    //declare blue


    this.addRed = function(n){
      this.red=this.red + n
      if(this.red>255){
        console.log(255);{


      if(this.red<0)

        console.log(0);

        }
      }
        //code in here
    };

    this.addGreen = function(n){
      if(this.green>255){
        console.log(255);
      }
      if(this.green<0){
        console.log(0);
      }
        //code in here
    };

    this.addBlue = function(n){
      if(this.blue>255){
        console.log(255);
      }
      if(this.blue<0){
        console.log(0);
      }
        //code in here
    };

    this.brighten = function(n){
      
        //code in here
    };

    this.complement = function(n){
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
