import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user:login" element={<User />} />
        
      </Routes>
    </div>
  );
}

export default App;
