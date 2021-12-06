import data from "../../data";
import ResetBall from "./ResetBall";
export default function AllBroken(bricks, player, canvas, ballObj) {
    let { brickObj, paddleProps } = data;
    //   if (bricks.length === 0) {
    //     return;
    //   }


    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (player.score === 100) {
        alert("Bonus Level unlocked!");
        bricks.length = 0;
        player.lives = 2;
        player.level = 1;
        //player.score = 100;
        //
        ResetBall(ballObj, canvas, paddleProps);
        ballObj.speed = 5;
        brickObj.y = 50;
    }


}