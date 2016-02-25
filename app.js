
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
var taxiLocationCounter=1;
//lilsten for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    //displayMessage(e.keyCode);

    var keyName = keyCodeName(e.keyCode);
    displayMessage(keyName);

    //moveForward();
  if((taxiLocationCounter)< 1|| (taxiLocationCounter > 9)){
    taxiLocationCounter = 0;
  }

     var trafficLight = new TrafficLight(taxiLocationCounter);

    if ((e.keyCode==39) && trafficLight.color()=="green")
    {


     moveForward();


    }

    if (e.keyCode==37){
    reverse();
    }

    if (e.keyCode==38) {
      trafficLight.makeRed();
    }
    if (e.keyCode==40) {
      trafficLight.makeGreen();
    }
displayMessage(createLocationClass(taxiLocationCounter));
 };



function keyCodeName (keyCode){
if(keyCode==37){
    return "left";
}

  else if (keyCode==38) {
    return "up";
  }
    else if (keyCode==39) {
      return "right";
    }
      else if (keyCode==40) {
        return "down";
      }

      else
        {
       return "";
    }

};

function createLocationClass(p){
if(p==1){
  return "slot-one-of-nine";
}

else if (p==2) {
    return "slot-two-of-nine";
  }
else if (p==3) {
  return "slot-three-of-nine";
}

else if (p==4) {
  return "slot-four-of-nine";
}
  else if (p==5) {
    return "slot-five-of-nine";
  }
else if (p==6) {
      return "slot-six-of-nine";
    }
else if (p==7) {
        return "slot-seven-of-nine";
      }
else if (p==8) {
          return "slot-eight-of-nine";
        }

else {
  return "slot-nine-of-nine";
}

};

function moveForward(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter++;
var newLocation = createLocationClass(taxiLocationCounter);
moveTaxi(currentLocation,newLocation);

};

function reverse(){
var currentLocation = createLocationClass(taxiLocationCounter);
taxiLocationCounter--;
var newLocation = createLocationClass(taxiLocationCounter);
moveTaxi(currentLocation,newLocation);

};

function createTrafficLightClass(p){


if(p==1){
  return ".one-of-nine";
}

else if (p==2) {
    return ".two-of-nine";
  }
else if (p==3) {
  return ".three-of-nine";
}

else if (p==4) {
  return ".four-of-nine";
}
  else if (p==5) {
    return ".five-of-nine";
  }
else if (p==6) {
      return ".six-of-nine";
    }
else if (p==7) {
        return ".seven-of-nine";
      }
else if (p==8) {
          return ".eight-of-nine";
        }

else {
  return ".nine-of-nine";
}
  };

//TrafficLight class
var TrafficLight = function(p){
  //create variables
var className= createTrafficLightClass(p);
var trafficLightElement = document.querySelector(className);

  //make light green
  this.makeGreen=function(){
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.add("lights-go");
  };
   //make light orange
  this.makeOrange=function(){
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.add("lights-slowdown");
  };
//make light red
  this.makeRed = function (){
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.add("lights-stop");
  };
 //check for color
  this.color=function(){
    if (trafficLightElement.classList.contains("lights-go")){
    return "green";
  }
    if (trafficLightElement.classList.contains("lights-slowdown")){
    return "orange";
  }

    if (trafficLightElement.classList.contains("lights-stop")){
    return "red";
  }

};
};
