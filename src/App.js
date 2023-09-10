import './styles/app.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart'
import './styles/mediaquery.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Toaster/>
    </Router>
      
  );
}

export default App;
