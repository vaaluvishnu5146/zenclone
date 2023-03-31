import "./App.css";
import TodoComponent from "./Components/TodoComponent";
import TeamDetails from "./Pages/TeamDetails";
/**
 * FUNCTIONAL COMPONENT SYNTAX
 * HOOKS
 * useState
 * useEffect
 *
 * Task1: Todo application
 * Task2: Counter
 *
 * Context Api:
 * Boiler plate code
 *
 * Task1: Todo Application
 * Task2: Counter
 */
function App() {
  return (
    <div id="zen-landing-page-container" className="app-container">
      <TeamDetails />
    </div>
  );
}
/**
 * IMPORT THE TEXT_COMPONENT INTO APP
 * USE THE <TextComponent /> in AppComponent
 */

export default App;
// <TextComponent firstName="Vishnu" lastName="vardhan" age={25} />
//       <TextComponent firstName="Abishek" lastName={null} age={22} />
