import React, { Component } from 'react'
import './FloppyApp.css'
import { Button } from '@chakra-ui/react';

export default class FloppyApp extends Component {
 
  componentDidMount(){
    const bird = document.querySelector(".bird");
    const gameDisplay = document.querySelector(".game-container");
    const ground = document.querySelector(".ground-moving");
  
    let birdLeft = 220;
    let birdBottom = 200;
    let gravity = 3;
    let isGameOver = false;
    let gap = 500;
    
  
    function startGame() {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + "px";
      bird.style.left = birdLeft + "px";
    }
    let gameTimerId = setInterval(startGame, 20);
  
    function control(e) {
      if (e.keyCode === 32) {
        jump();
      }
    }
  
    function jump() {
      if (birdBottom < 500) birdBottom += 50;
      bird.style.bottom = birdBottom + "px";
    }
    document.addEventListener("keyup", control);
  
    function generateObstacle() {
      let obstacleLeft = 500;
      let randomHeight = Math.random() * 60;
       let obstacleBottom = randomHeight;
       const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      if (!isGameOver) {
        obstacle.classList.add("obstacle");
        topObstacle.classList.add("topObstacle");
      }
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";
  
      function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
  
        if (obstacleLeft === -60) {
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom < obstacleBottom + 153 ||
              birdBottom > obstacleBottom + gap - 200)) ||
          birdBottom === 1
        ) {
          gameOver();
          clearInterval(timerId);
        }
      }
      let timerId = setInterval(moveObstacle, 20);
      if (!isGameOver) setTimeout(generateObstacle, 3000);
    }
     generateObstacle();
  
    function gameOver() {
      clearInterval(gameTimerId);
      isGameOver = true;
      document.removeEventListener("keyup", control);
      ground.classList.add("ground");
      ground.classList.remove("ground-moving");
      
    }
  }
  render() {
    return (
      
      <div className="floppy-container">
        <div class="border-left"></div>
            <div class="game-container">
                <div class="border-top"></div>
                <div class="sky">
                  
                    <div class="bird"></div>
                </div>
            </div>
              <div class="ground-container">
              <div class="ground-moving"></div>
            </div>
            <div class="border-right"></div>
          <Button
            my={4}
            w='20%'
            colorScheme='teal'
            color='white'
            padding={'20px'}
            onClick={()=>window.location.reload()}
          >Restart Game</Button>
      </div>
      
    )
  }
}
