
import './App.css';
import Counter from "./components/Counter";
import EvenCounter from "./components/EvenCounter";
import IncreaseByAmount from "./components/IncreaseByAmount";

function App({store}) {
  return (
    <div className="App">
    <Counter/>
    <hr/>
    <EvenCounter />
    <hr/>
    <IncreaseByAmount/>
    </div>
  );
}

export default App;
