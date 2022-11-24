import Header from "./components/Header"
import './App.css';
import Bodytest from "./components/Bodytest";
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/test" element={<Bodytest></Bodytest>}></Route>
      </Routes>
    </div>
  )
}

export default App;
