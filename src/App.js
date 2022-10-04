import Footer from './components/Footer';
import Header from './components/Header';
import Store from './pages/Store';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WishList from './pages/WishList';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='fht'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path="/wishlist" element={<WishList/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;