import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Register from './student/Register';
import View from './student/View'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/view" element={<View/>} />
      </Routes>
    </BrowserRouter >
     
    </>
  );
}

export default App;
