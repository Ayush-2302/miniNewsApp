import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accordian from './components/Accordian';
import Navbar from './components/Navar';
import Sidebar from './components/Sidebar';
import Record from './components/Record';
import Dropdown from './components/Dropdown';

function App() {
  return (
   <>
<Router>
    <Navbar/>
  <Routes>
  <Route exact path="/" element={<Dropdown />} />
  <Route exact path="/record" element={<Record />} />
  <Route exact path="/accordien" element={<Accordian />} />
  <Route exact path="/sidebar" element={<Sidebar />} />
  {/* <Route exact path="/sidebar" element={<FullScreen />} /> */}

  </Routes>
</Router>
   </>
  );
}

export default App;
