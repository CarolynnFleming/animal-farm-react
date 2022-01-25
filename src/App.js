import './App.css';
import { animals } from './data';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header name= "Carolynn Fleming" />

      <Footer year = "2022" />

      <Main animal = {animals} />
    </div>
  );
}

export default App;
