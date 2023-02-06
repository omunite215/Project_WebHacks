import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
     <Navbar homeActivityStatus="active border-bottom border-3 border-info rounded-0"/>
     <News/>
    </div>
  );
}

export default App;
