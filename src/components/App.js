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

const App = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <>
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          {!isAuthenticated && <Route path='/' element={<Auth />} />}
          {isAuthenticated && <Route path='/' element={<Home />} />}
          <Route
            path='/profile'
            element={isAuthenticated ? <Profile /> : <Navigate to='/' />}
          />
          <Route
            path='/settings'
            element={isAuthenticated ? <Settings /> : <Navigate to='/' />}
          />
          <Route
            path='/mint'
            element={isAuthenticated ? <Mint /> : <Navigate to='/' />}
          />
          <Route
            path='/games'
            element={isAuthenticated ? <Games /> : <Navigate to='/' />}
          />
          <Route
            path='/hangman'
            element={isAuthenticated ? <HangmanApp /> : <Navigate to='/' />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
