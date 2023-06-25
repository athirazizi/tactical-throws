import logo from './logo.svg';

import Navbar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import MapMirage from './pages/MapMirage';
import MapDust2 from './pages/MapDust2';
import MapInferno from './pages/MapInferno';
import Grenades from './pages/Grenades';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import SubmitLineup from './pages/SubmitLineup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/submit' element={<SubmitLineup/>}/>
          <Route path='/mirage' element={<MapMirage data="mirage" />} />
          <Route path='/dust2' element={<MapDust2 data="dust2" />} />
          <Route path='/inferno' element={<MapInferno data="inferno" />} />

          <Route path='/grenades' element={<Grenades />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
