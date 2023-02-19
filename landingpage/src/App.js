import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
