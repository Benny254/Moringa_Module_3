import User from './components/user';
import Hobbies from './components/Hobbies';
import About from './components/About';
import './App.css';


function App() {
  return (
    <div className="App">
      <User name="Benard Odhiambo" />
      <About />
      <Hobbies />
    </div>
  );
}

export default App;



