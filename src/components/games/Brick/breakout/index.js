import React from "react";
import Board from "./board";

export default function Breakout() {
    return ( <div style={{padding: '50px'}}>
        <Board/>
        <div><h2>Use your mouse to hit the red ball.</h2></div>
        </div>
    );
}