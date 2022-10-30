import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';


function App() {
  AOS.init({
    //initialize
    duration : 3000
  });
  return (
    <>
    <Router>         
      <Base>      
        <Routes>
          <Route index path='/' element={ <Home/> } />
        </Routes>        
        </Base>     
      </Router>
      </>
  );
}

export default App;
