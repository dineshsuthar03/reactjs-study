import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome';
import Names from './Names';
import Greeting from  "./Greeting";
import MyForm  from './MyForm';


function App() {

  const handleClick = () => {
    console.log('Button clicked');
    alert('Button clicked');
    // Add more functionality here
  }



  return (
    <div className="App">
      <header className="App-header">

        <MyForm/>
        <Welcome />
        <Names/>
        <Greeting  username = "dinesh" />

        <div >
          <button onClick={handleClick}>
            Click me
          </button>

        </div>


      </header>
    </div>
  );
}

export default App;
