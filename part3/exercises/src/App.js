import HobbyIntroduction from './components/Introduction.js';
import MyProjects from './components/projects.js';
import './App.css';

function App() {
  return (
  <div className="App">
     <h1 className="App-header">My Hobby: Chrochet</h1>
      <HobbyIntroduction/>
      <MyProjects/>
  </div>
  );
}

export default App;
