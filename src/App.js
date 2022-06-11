import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user:id" element={<User />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
