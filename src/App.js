import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginForm/>
      <MainContent/>
    </div>
  );
}

export default App;
