"use strict"
let back = document.getElementById("ox_back");
let text = document.getElementById("ox_text");
let car = document.getElementById("ox_player");
let car1 = document.getElementById("ox_player2");
var speed = document.getElementById("speed")
var power = document.getElementById("power")
var carColor = document.getElementById("carColor")
var par = document.getElementById("ox_par")
var ox = 0
document.onkeydown = function(e){
    // console.log(e)
    if(e.key == "1"){
        back.style.backgroundImage = "url('img/kevin.jpg')"
        back.style.transition = "all 1s"
        text.innerHTML = "map"
        text.style.left = 50 + "px"
    
    }
    if(e.key == "2"){
        back.style.backgroundImage = "url('img/dhilzyi-_-garage.jpg')"
        back.style.transition = "all 0.8s"
        text.innerHTML = "garage"
        text.style.left = 150 + "px"
       
        
    }
    if(e.key == "3"){
        back.style.backgroundImage = "url('img/Bathurst_01.jpg')"
        back.style.transition = "all 0.9s"
        text.innerHTML = "race"
        text.style.left = 250 + "px"
       
    }
    if(e.key == "4"){
        back.style.backgroundImage = "url('img/4.jpg')"
        back.style.transition = "all 0.9s"
        text.innerHTML = "online"
        text.style.left = 350 + "px"
        
  
    }
    if(e.key == "q"){
        car.src = "img/sports-car.png"
        document.getElementById("ox_logo").src = "img/bugatti-logo.png"
        document.getElementById("speed").innerHTML = "speed - 320 km/h"
        document.getElementById("power").innerHTML = "power - 380 hp"
        document.getElementById("carColor").innerHTML = "color - Black"
        ox = 1
    }
    if(e.key == "w"){
        car.src = "img/ferrari-clip-art-2.png"
        document.getElementById("ox_logo").src = "img/Ferrari-Logo-1947-2002.png"
        document.getElementById("speed").innerHTML = "speed - 350 km/h"
        document.getElementById("power").innerHTML = "power - 400 hp"
        document.getElementById("carColor").innerHTML = "color - Red"
        ox = 2
    }
    if(e.key == "e"){
        car.src = "img/bugatti_P.png"
        document.getElementById("ox_logo").src = "img/bugatti-logo.png"
        document.getElementById("speed").innerHTML = "speed - 380 km/h"
        document.getElementById("power").innerHTML = "power - 420 hp"
        document.getElementById("carColor").innerHTML = "color - Blue"
        ox = 3
    }
    if(e.key == "r" ){
        car.src = "img/Audi.png"
        document.getElementById("ox_logo").src = "img/audi-logo-1.png"
        document.getElementById("speed").innerHTML = "speed - 370 km/h"
        document.getElementById("power").innerHTML = "power - 360 hp"
        document.getElementById("carColor").innerHTML = "color - Red-Black"
        ox = 4
    }
    if(e.key == "t"){
        car.src = "img/white.png"
        document.getElementById("ox_logo").src = "img/4_lamborghini-l.png"
        document.getElementById("speed").innerHTML = "speed - 410 km/h"
        document.getElementById("power").innerHTML = "power - 398 hp"
        document.getElementById("carColor").innerHTML = "color - White"
        ox = 5
    }
    if(e.key == "z"){
        car1.src = "img/Audi.png"
        document.getElementById("ox_logo1").src = "img/audi-logo-1.png"
        document.getElementById("speed1").innerHTML = "speed - 370 km/h"
        document.getElementById("power1").innerHTML = "power - 360 hp"
        document.getElementById("carColor1").innerHTML = "color - Red-Black"
        ox = 4
    }
    if(e.key == "x"){
        car1.src = "img/white.png"
        document.getElementById("ox_logo1").src = "img/4_lamborghini-l.png"
        document.getElementById("speed1").innerHTML = "speed - 410 km/h"
        document.getElementById("power1").innerHTML = "power - 398 hp"
        document.getElementById("carColor1").innerHTML = "color - White"
        ox = 5
    }
    if(e.key == "c"){
        car1.src = "img/bugatti_P.png"
        document.getElementById("ox_logo1").src = "img/bugatti-logo.png"
        document.getElementById("speed1").innerHTML = "speed - 380 km/h"
        document.getElementById("power1").innerHTML = "power - 420 hp"
        document.getElementById("carColor1").innerHTML = "color - Blue"
        ox = 3
    }
    if(e.key == "v"){
        car1.src = "img/ferrari-clip-art-2.png"
        document.getElementById("ox_logo1").src = "img/Ferrari-Logo-1947-2002.png"
        document.getElementById("speed1").innerHTML = "speed - 350 km/h"
        document.getElementById("power1").innerHTML = "power - 400 hp"
        document.getElementById("carColor1").innerHTML = "color - Red"
        ox = 2
    }
    if(e.key == "b"){
        car1.src = "img/sports-car.png"
        document.getElementById("ox_logo1").src = "img/bugatti-logo.png"
        document.getElementById("speed1").innerHTML = "speed - 320 km/h"
        document.getElementById("power1").innerHTML = "power - 380 hp"
        document.getElementById("carColor1").innerHTML = "color - Black"
        ox = 1
    }
    if(e.key == "Escape"){
        exit()
    }
    
}
function  parameter (y){
    
    var par = document.createElement("DIV")
    var logo = document.createElement("IMG")
    var speed = document.createElement("SPAN")
    var power = document.createElement("SPAN")
    var carColor = document.createElement("SPAN")
    document.getElementById("ox_back").appendChild(par)
    par.setAttribute("id","ox_par")
    document.getElementById("ox_par").appendChild(logo)
    document.getElementById("ox_par").appendChild(speed)
    document.getElementById("ox_par").appendChild(power)
    document.getElementById("ox_par").appendChild(carColor)
    logo.setAttribute("id","ox_logo")
    speed.setAttribute("id","speed")
    power.setAttribute("id","power")
    carColor.setAttribute("id","carColor")
    logo.src = "img/bugatti-logo.png"
    speed.innerHTML = "speed - 320 km/h"
    power.innerHTML = "power - 380 hp"
    carColor.innerHTML = "color - Black"
    if(ox == 1){
        document.getElementById("ox_logo").src = "img/bugatti-logo.png"
        document.getElementById("speed").innerHTML = "speed - 320 km/h"
        document.getElementById("power").innerHTML = "power - 380 hp"
        document.getElementById("carColor").innerHTML = "color - Black"
    }
    if(ox == 2){
        document.getElementById("ox_logo").src = "img/Ferrari-Logo-1947-2002.png"
        document.getElementById("speed").innerHTML = "speed - 350 km/h"
        document.getElementById("power").innerHTML = "power - 400 hp"
        document.getElementById("carColor").innerHTML = "color - Red"
    }
    if(ox == 3){
        document.getElementById("ox_logo").src = "img/bugatti-logo.png"
        document.getElementById("speed").innerHTML = "speed - 380 km/h"
        document.getElementById("power").innerHTML = "power - 420 hp"
        document.getElementById("carColor").innerHTML = "color - Blue"
    }
    if(ox == 4){
        document.getElementById("ox_logo").src = "img/audi-logo-1.png"
        document.getElementById("speed").innerHTML = "speed - 370 km/h"
        document.getElementById("power").innerHTML = "power - 360 hp"
        document.getElementById("carColor").innerHTML = "color - Red-Black"
    }
    if(ox == 5){
        document.getElementById("ox_logo").src = "img/4_lamborghini-l.png"
        document.getElementById("speed").innerHTML = "speed - 410 km/h"
        document.getElementById("power").innerHTML = "power - 398 hp"
        document.getElementById("carColor").innerHTML = "color - White"
    }
}
function parNone(t){

    document.getElementById("ox_par").remove()
}
function parameter1 (y){
    var carParam = document.createElement("DIV")
    var speed1 = document.createElement("SPAN")
    var power1 = document.createElement("SPAN")
    var logo1 = document.createElement("IMG")
    var carColor1 = document.createElement("SPAN")
    document.getElementById("ox_back").appendChild(carParam)
    carParam.setAttribute("id","ox_par1")
    document.getElementById("ox_par1").appendChild(logo1)
    document.getElementById("ox_par1").appendChild(speed1)
    document.getElementById("ox_par1").appendChild(power1)
    document.getElementById("ox_par1").appendChild(carColor1)
    logo1.setAttribute("id","ox_logo1")
    speed1.setAttribute("id","speed1")
    power1.setAttribute("id","power1")
    carColor1.setAttribute("id","carColor1")
    logo1.src = "img/audi-logo-1.png"
    speed1.innerHTML = "speed - 370 km/h"
    power1.innerHTML = "power - 360 hp"
    carColor1.innerHTML = "color - Red-Black"
    if(ox == 1){
        document.getElementById("ox_logo1").src = "img/bugatti-logo.png"
        document.getElementById("speed1").innerHTML = "speed - 320 km/h"
        document.getElementById("power1").innerHTML = "power - 380 hp"
        document.getElementById("carColor1").innerHTML = "color - Black"
    }
    if(ox == 2){
        document.getElementById("ox_logo1").src = "img/Ferrari-Logo-1947-2002.png"
        document.getElementById("speed1").innerHTML = "speed - 350 km/h"
        document.getElementById("power1").innerHTML = "power - 400 hp"
        document.getElementById("carColor1").innerHTML = "color - Red"
    }
    if(ox == 3){
        document.getElementById("ox_logo1").src = "img/bugatti-logo.png"
        document.getElementById("speed1").innerHTML = "speed - 380 km/h"
        document.getElementById("power1").innerHTML = "power - 420 hp"
        document.getElementById("carColor1").innerHTML = "color - Blue"
    }
    if(ox == 4){
        document.getElementById("ox_logo1").src = "img/audi-logo-1.png"
        document.getElementById("speed1").innerHTML = "speed - 370 km/h"
        document.getElementById("power1").innerHTML = "power - 360 hp"
        document.getElementById("carColor1").innerHTML = "color - Red-Black"
    }
    if(ox == 5){
        document.getElementById("ox_logo1").src = "img/4_lamborghini-l.png"
        document.getElementById("speed1").innerHTML = "speed - 410 km/h"
        document.getElementById("power1").innerHTML = "power - 398 hp"
        document.getElementById("carColor1").innerHTML = "color - White"
    }
    
}
function parNone1 (t){
    document.getElementById("ox_par1").remove()
}
function exit(){
    var exitt = confirm("Are you want to exit?")
    if(exitt){
        back.style.display = "none"
    }else{
        back.style.display = "block"
    }
    exitt.setAttribute("class","exit")
}

