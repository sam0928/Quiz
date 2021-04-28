import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import HelloCGU from './cgu_hello';

function App() {
  return(
    <div className="App">
      <div>{ HelloCGU() }</div>
      <div>{ MyButton() }</div>
    </div>
  );
};

export default App;
