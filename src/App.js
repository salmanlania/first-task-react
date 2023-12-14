import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Mains from './components/Mains/Mains';
// import Router from './config/Router';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Mains />
      <Footer />
    </div>
  );
}

export default App;
