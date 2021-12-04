import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Navbar from './mini/Navbar';
import Mint from './pages/Mint';
import Games from './pages/Games'
import HangmanApp from './games/Hangman/HangmanApp';
import FloppyApp from './games/Floppy/FloppyApp';
import BrickApp from './games/Brick/breakout/index';
import Tetris from './games/Tetris/Stepped Solutions/react-tetris - FINISHED/src/components/Tetris'

const App = () => {
        const { isAuthenticated } = useMoralis();
        return ( <>
                <Router> { isAuthenticated && < Navbar / > } 
                
                <Routes> {!isAuthenticated && < Route path = '/'
                    element = { < Auth/> }
                    />} 
                    {
                        isAuthenticated && < Route path = '/'
                        element = { < Home/> }
                        />} 
												<Route
                        path = '/profile'
                        element = { isAuthenticated ? < Profile /> : <Navigate to = '/'
												/> }
                        /> 
												<Route
                        path = '/settings'
                        element = { isAuthenticated ? < Settings /> : < Navigate to = '/' /> }
                        /> 
												<Route
                        path = '/mint'
                        element = { isAuthenticated ? < Mint /> : < Navigate to = '/' /> }
                        /> 
												<Route
                        path = '/games'
                        element = { isAuthenticated ? < Games /> : < Navigate to = '/' /> }
                        /> 
												<Route
                        path = '/hangman'
                        element = { isAuthenticated ? < HangmanApp /> : < Navigate to = '/' /> }
                        /> 
												<Route
                        path = '/floppy'
                        element = { isAuthenticated && < FloppyApp /> }
                        /> 
                        <Route
                        path = '/brick'
                        element = { isAuthenticated && < BrickApp /> }
                        /> 
                        <Route
                        path = '/tetris'
                        element = { isAuthenticated && < Tetris /> }
                        /> 
                        
                        </Routes> 
												</Router> 
												</>
                    );
                };

                export default App;