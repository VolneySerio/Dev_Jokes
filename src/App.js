import "./App.css";
import "./components/Joke.js";
import Joke from "./components/Joke.js";

function App() {
  return (
    <div className="App">
      <header>Some Dev jokes</header>
      <Joke />
    </div>
  );
}

export default App;
