import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
        <Routes>
          <Route
            path='/'
            exact
            element={<Home showAddTask={showAddTask} />}
          ></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
