import Blog from './blog/Blog'
import Technology from './blog/Technology'
import Design from './blog/Design'
import Culture from './blog/Culture'
import Business from './blog/Business'
import Politics from './blog/Politics'
import Opinion from './blog/Opinion'
import Science from './blog/Science'
import Health from './blog/Health'
import Style from './blog/Style'
import Travel from './blog/Travel'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route index element={<Blog/>}/>
    <Route path="Technology" element={<Technology/>}/>
    <Route path="Design" element={<Design/>}/>
    <Route path="Culture" element={<Culture/>}/>
    <Route path="Business" element={<Business/>}/>
    <Route path="Politics" element={<Politics/>}/>
    <Route path="Opinion" element={<Opinion/>}/>
    <Route path="Science" element={<Science/>}/>
    <Route path="Health" element={<Health/>}/>
    <Route path="Style" element={<Style/>}/>
    <Route path="Travel" element={<Travel/>}/>

    
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
