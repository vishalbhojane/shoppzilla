import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='fht'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='store' element={<Store />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;