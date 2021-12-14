import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  const [speed,setSpeed] = useState(5)

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.backgroundColor = "yellow";
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
  
    const player = {
      w:400,
      h:100,
      x:700,
      y:400,
      speed:10,
      dx:200,
      dy:100
    }

   playerRef.current = player

   const drawPlane = () => {
    let plane = new Image();
    plane.src = "https://i.imgur.com/iNJmBDq.png"
    plane.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
    contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);
  }}

  const update = () => {
    // drawRectRight();
    // drawRectRightRight();

    // drawRectUp();
    // drawRectUpUp();

    // drawRectLeft();
    // drawRectLeftLeft();

    // drawRectDown();
    // drawRectDownDown();

    drawPlane();
    requestAnimationFrame(update)
  }
  update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;
  console.log(SCREEN_WIDTH)
  console.log(SCREEN_HEIGHT)

  //MOVEMENT FUNCTIONS

const moveUp = () => {
  playerRef.current.y = playerRef.current.y - playerRef.current.dy
  console.log(playerRef.current.y)

  boundariesUp()
}

const moveLeft = () => {
  playerRef.current.x =  playerRef.current.x - playerRef.current.dx
  console.log(playerRef.current.x )
  boundariesLeft()
}
const moveRight = () => {
  playerRef.current.x = playerRef.current.x + playerRef.current.dx
  console.log(playerRef.current.x )

  boundariesRight()
}

const moveDown = () => {
  playerRef.current.y = playerRef.current.y + playerRef.current.dy
  console.log(playerRef.current.y)

  boundariesDown()
}

const moveRightUp = () => {
  playerRef.current.y = playerRef.current.y - playerRef.current.dy
  playerRef.current.x = playerRef.current.x + playerRef.current.dx

  boundariesRight()
  boundariesUp()
}

const moveRightDown = () => {
  playerRef.current.y = playerRef.current.y + playerRef.current.dy
  playerRef.current.x = playerRef.current.x + playerRef.current.dx

  boundariesRight()
  boundariesDown()
 
}
const moveLeftUp = () => {
  playerRef.current.y = playerRef.current.y - playerRef.current.dy
  playerRef.current.x =  playerRef.current.x - playerRef.current.dx

  boundariesLeft()
  boundariesUp()
}
const moveLeftDown = () => {
  playerRef.current.y = playerRef.current.y + playerRef.current.dy
  playerRef.current.x =  playerRef.current.x - playerRef.current.dx

  boundariesDown()
  boundariesLeft()
}

const movementFunction = (e) => {
  if(e.key === "w"){
    moveUp()
  } else if (e.key === "d"){
    moveRight()
  } else if (e.key === "a"){
    moveLeft()
  }else if (e.key === "s"){
    moveDown()
  } else if (e.key === "q"){
    moveLeftUp()
  } else if(e.key === "e"){
    moveRightUp()
  }else if(e.key === "z"){
    moveLeftDown()
  } else if(e.key === "c"){
    moveRightDown()
  } else if( e.key === "l"){
    console.log("blaster")
  } else if ( e.key === "m"){
    console.log("superBlater")
  } else if ( e.key === " "){
    console.log("boosters")
  }
}


const boundariesLeft = () => {
  if(playerRef.current.x < -300){
    playerRef.current.x = 1900
  }
}

const boundariesRight = () => {
  if(playerRef.current.x > 1900){
    playerRef.current.x = -300
  } 
}

const boundariesUp = () => {
  if(playerRef.current.y < 0){
    playerRef.current.y = 0
    console.log('hit')
  }}

  
const boundariesDown = () => {
  if(playerRef.current.y > 835){
    playerRef.current.y = 835
  }}  

//Randomizer for Rectangles

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


console.log(getRandomInt(9))

//Rectangle Drawings

const rectangleOne  = {
  x:20,
  y:20,
  size:20, 
}

const drawRectRight = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
  contextRef.current.fillStyle = "green"
  contextRef.current.fill();
}


const drawRectRightRight = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
  contextRef.current.fillStyle = "blue"
  contextRef.current.fill();
}

const drawRectLeft = () => {
  contextRef.current.beginPath();
  contextRef.current.lineWidth = "4";
  contextRef.current.strokeStyle = "Blue";
  contextRef.current.rect(SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
  // contextRef.current.fill("blue");
  contextRef.current.fillStyle = "Blue"
  contextRef.current.fill();
}

const drawRectLeftLeft = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(SCREEN_WIDTH/4, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
  contextRef.current.fillStyle = "Blue"
  contextRef.current.fill();
}

const drawRectUp = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT);
  contextRef.current.fillStyle = "pink"
  contextRef.current.fill();
}

const drawRectUpUp = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, SCREEN_HEIGHT/4, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
  contextRef.current.fillStyle = "purple"
  contextRef.current.fill();
}



const drawRectDown = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT/2);
  contextRef.current.fillStyle = "pink"
  contextRef.current.fill();
}

const drawRectDownDown = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
  contextRef.current.fillStyle = "purple"
  contextRef.current.fill();
}









  return (
    <canvas
    tabIndex="0" 
    onKeyDown ={movementFunction}
    ref = {canvasRef}
    />
  );
}

export default App;
