import './App.css';
import Router from './Components/Utility/Router';
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
