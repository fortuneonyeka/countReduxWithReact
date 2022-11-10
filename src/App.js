
import './App.css';
import Counter from "./components/Counter";
import EvenCounter from "./components/EvenCounter";

function App({store}) {
  return (
    <div className="App">
    <Counter/>
    <hr/>
    <EvenCounter />
    </div>
  );
}

export default App;
