import Header from "./components/Header"
import './App.css';
import Bodytest from "./components/Bodytest";
import {Route,Routes} from "react-router-dom"
import Adventure from "./components/Adventure";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/test" element={<Bodytest></Bodytest>}></Route>
        <Route path="/adventure" element={<Adventure></Adventure>}></Route>
      </Routes>
    </div>
  )
}

export default App;
