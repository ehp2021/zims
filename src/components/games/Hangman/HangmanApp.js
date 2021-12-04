import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import Sidebar from '../../mini/Sidebar';
import './HangmanApp.css';


// https://random-word-api.herokuapp.com/word?number=100

const words = ['application', 'programming', 'interface', 'wizard', 'luxury', 'transplant',
    'vodka', 'wellspring', 'whomever', 'xylophone', 'puffy',
    'each', 'early', 'earn', 'earth', 'east', 'easy', 'education', 'effect', 'egg', 'eight', 'either', 'electric',
    'elephant', 'else', 'empty', 'end', 'enemy', 'equal', 'entrance',
    'escape', 'everyone', 'examination', 'expensive', 'extremely',
    'hundred', 'hungry', 'hour', 'hurry', 'husband',
    'jelly', 'juice', 'machine', 'mention', 'method', 'middle', 'milk',
    'queen', 'question', 'vegetable', "tapeable",
    "costless", "exhumed", "horsts", "detesters","clangs", "uncrating", "medicine", "outbuild", "cosmopolitian",
    "monologued", "prioritizations", "climatology","odoriferously","outsee",
    "trolling","monarch","proteolytic","syndicators","belted","thunderbolt","septal",
    "cojoin","lines","soppiness","foilable","canalize","ridgling","objectification","aground",
    "turbulence","dieseled","liberalisms",
    "curtsy","devaluates","glaring","influentially","fettucine","colloquialisms",
    "seadog","chomp","smudged",
    "quintupling",
    "directionless",
    "capris",
    "quantitate",
    "official",
    "reactively",
    "faintly",
    "sensualism",
    "exosphere",
    "reattributed",
    "orthochromatic",
    "underlings",
    "microporosities",
    "workshop",
    "bellies",
    "stockbroker",
    "scabbarded",
    "unemotional",
    "presentative",
    "factiousness",
    "micrographic",
    "assuming",
    "opiums",
    "gotten",
    "crudeness",
    "brush",
    "thenage",
    "humanist",
    "sewerlike",
    "souslik",
    "certify",
    "venerations",
    "vexillum",
    "talapoins",
    "variedly",
    "curry",
    "spatiotemporal",
    "thiopental",
    "nonpetroleum",
    "chromogen",
    "orthotist",
    "reaccede",
    "womanise",
    "magnetise",
    "whatsits",
    "headwaiter",
    "stratas",
    "unenlightened",
    "abulias",
    "shooled",
    "henbit",
    "persecutions",
    "exclaimers",
    "slatternliness",
    "captainships",
    "stockholder",
    "entomologists",
    "ennobler",
    "neophilia",
    "irrigably",
    "neutralisms",
    "insisted",
    "unclogs",
    "stammering",
    "isomerized",
    "begladding",
    "strictly",
    "lagged",
    "bindweed",
    "inaudible",
    "galenas",
    "sternest",
    "corbels",
    "quadrupeds",
    "cladistic",
    "oversimplified",
    "treacherousness",
    "headstays","serenely","elusiveness","cochairwoman","frowner","dayflowers",
    "occipital","reservednesses","decarboxylating","percent",
    "aloofly","proscriptions","charpais","zebrawoods","presentees","acridnesses",
    "palliated","snorkeler","hairbrush","unassailability","prickier", "overestimations", "citational","supertight",
"nonporous","disinterests","sharpened",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function HangmanApp() {
    // const [word, setWord] = useState('');
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    // async function getWord () {
    //   const result = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
    //   console.log(result.data[0], "HANGMAN WORD API")
    //   setWord(result.data[0]);
    //   return result.data[0]
    // }

    // useEffect(() => {
    //   getWord()
    // },[])

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
        setPlayable(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return ( 
      <div className = "hangman-box" >
        <div className = "sidebar-box" >
        <Sidebar/>
        </div>

        <Header/>
        <div className = "hangman-container" >
        <Figure wrongLetters = { wrongLetters }
        /><WrongLetters wrongLetters = { wrongLetters }
        /><Word selectedWord = { selectedWord }
        correctLetters = { correctLetters }
        /> </div> <Popup correctLetters = { correctLetters }
        wrongLetters = { wrongLetters }
        selectedWord = { selectedWord }
        setPlayable = { setPlayable }
        playAgain = { playAgain }
        /><Notification showNotification = { showNotification }
        /> 
        </div>
    );
}

export default HangmanApp;