import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import Habits from './components/Habits/Habits';
import Tracker from "./components/Tracker/Tracker";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Rewards from "./components/Rewards/Rewards";
import Parents from "./components/Parents/Parents";

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/tracker" element={<Tracker/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/rewards" element={<Rewards/>} />
          <Route path="/parents" element={<Parents/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
