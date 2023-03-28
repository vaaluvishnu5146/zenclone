import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateStudents from "./Journey/StudentsJourney/CreateStudents";
import ManageStudents from "./Journey/StudentsJourney/ManageStudents";
import StudentsJourney from "./Journey/StudentsJourney/index";

function App() {
  return (
    <div id="zen-landing-page-container" className="app-container">
      <div
        id="zen-content-area-container"
        className="zen-content-area-container"
      >
        <div id="zen-sidebar" className="zen-sidebar">
          <div className="sidebar-header-branding">
            <img
              className="brand-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s"
              alt="Zen-class-logo"
            />
            Zen Classes
          </div>
          <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
            <ul>
              <li>
                <Link to="/students">Student Journey</Link>
              </li>
              <li>Mentor Journey</li>
              <li>Session Journey</li>
            </ul>
          </nav>
        </div>
        <div id="zen-content-area" className="zen-content-area">
          <Routes>
            <Route path="students" Component={StudentsJourney}>
              <Route path="create" Component={CreateStudents} />
              <Route path="manage" Component={ManageStudents} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
