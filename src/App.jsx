import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restview from './pages/Restview'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
     
     <Header/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurant-view/:id' element={<Restview/>}/>
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
