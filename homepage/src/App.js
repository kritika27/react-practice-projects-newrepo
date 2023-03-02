import './App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Footer } from './Footer';
import { Services } from './Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
