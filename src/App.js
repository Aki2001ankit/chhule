import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import IndianMarvels from "./pages/IndianMarvels";
import NearestCentres from "./pages/NearestCentres";
import AboutUs from "./pages/AboutUs";
import './App.css'
import './styles/font.css'

function App() {
  return (
    <div className="App">
      <Router hashType = 'noslash'> {/*Check Once: no slash is not working */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/IndianMarvels' element={<IndianMarvels />} />
          <Route path='/NearestCentres' element={<NearestCentres />} />
          <Route path='/AboutUs' element={<AboutUs />} />  
        </Routes>
      </Router>
    </div>
  )
}
export default App;
