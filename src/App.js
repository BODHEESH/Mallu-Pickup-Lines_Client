import logo from './Images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='flex'>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    
        <h1 className="text-3xl font-bold underline">
      Welcome to mallu pickup lines
    </h1>
      </header>
    </div>
  );
}

export default App;
