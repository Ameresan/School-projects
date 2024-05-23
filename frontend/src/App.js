import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import  About from './Components/About';
import  Home  from './Components/Home';
import  Navbar  from './Components/Navbar';
// import Admin from './Components/Admin';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      <Routes >
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/admin' element={<Admin/>}/> */}
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
