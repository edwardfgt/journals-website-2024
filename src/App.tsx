import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage';
import Contact from './components/ContactForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
