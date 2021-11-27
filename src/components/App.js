import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Navbar from './mini/Navbar';

const App = () => {
  const { isAuthenticated } = useMoralis(); 
  return (
    <>
      <Router>
        <div className="navbar-container">
        {isAuthenticated && <Navbar />}
        </div>
        <Routes>
          {!isAuthenticated && <Route path='/' element={<Auth />} />}
          {isAuthenticated && <Route path='/' element={<Home />} />}
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
