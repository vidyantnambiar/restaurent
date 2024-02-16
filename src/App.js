import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestView from './pages/RestView';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Header />
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restView/:id' element={<RestView/>}/>
     
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
