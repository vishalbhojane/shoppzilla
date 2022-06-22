import {Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <div className='fht'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='store' element={<Store />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;