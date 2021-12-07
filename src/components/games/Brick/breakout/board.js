import { React, useRef, useEffect } from "react";
import { BallMovement } from "./BallMovement";
import data from "../data";
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroken";
import ResetBall from "./util/ResetBall";
import{useNavigate} from 'react-router-dom'
import {useMoralis} from 'react-moralis'

let { ballObj, paddleProps, brickObj, player } = data;

let bricks = [];





export default function Board() {
    const {user,setUserData} = useMoralis()
    const canvasRef = useRef(null);
    const NavigateBrick = useNavigate();

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (canvas === null) return null;
            const ctx = canvas.getContext("2d");

            paddleProps.y = canvas.height - 30;

            // asign bricks

            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            PlayerStats(ctx, player, canvas);

            //if games is complete


            if (player.lives === 0) {
                alert("GAME OVER");
            setUserData({points:(user.attributes.points+(player.score))})
                //window.location.href = "/games";
           NavigateBrick('/games')
           //window.location.reload(true)
           window.location.replace('/games')
            }
            if (player.score === 200) {
                alert("Congratulations! You are a true Brick Breaker!")
                setUserData({points:(user.attributes.points+(player.score*2))})
                //window.location.href = "/games";
           NavigateBrick('/games')
           //window.location.reload(true)
           window.location.replace('/games')
            }

           

            bricks.map((brick) => {
                return brick.draw(ctx);
            });

            BallMovement(ctx, ballObj);

            AllBroken(bricks, player, canvas, ballObj);

            WallCollision(ballObj, canvas, player, paddleProps);

            // Brick Collision
            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if (brickCollision.hit && !bricks[i].broke) {
                    if (brickCollision.axis === "X") {
                        ballObj.dx *= -1;
                        bricks[i].broke = true;
                    } else if (brickCollision.axis === "Y") {
                        ballObj.dy *= -1;
                        bricks[i].broke = true;
                    }
                    player.score += 10;
                }
            }

            Paddle(ctx, canvas, paddleProps);

            PaddleHit(ballObj, paddleProps);

            requestAnimationFrame(render);
        };
        render();
    }, []);

    return ( 
    <div classname = "brick-container">
        < canvas id = "canvas"
        ref = { canvasRef }
        onMouseMove = {
            (event) =>
            (paddleProps.x = event.clientX - paddleProps.width / 2 - 10)
        }
        height = "500px"
        width = { window.innerWidth - 220 }
        />  
    </div>
    );
}